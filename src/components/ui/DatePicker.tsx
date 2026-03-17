'use client'

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import {
  addMonths,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isSameMonth,
  isBefore,
  isAfter,
  format,
  eachDayOfInterval,
  isWithinInterval,
} from "date-fns";

/**
 * React 19 compatible DatePicker with Radix Popover + date-fns.
 * - Accessible keyboard nav
 * - Tailwind styles
 * - No peer-dep conflicts with React 19
 *
 * Usage:
 *   <DatePicker value={date} onChange={setDate} />
 *
 * Optional props:
 *   - minDate?: Date
 *   - maxDate?: Date
 *   - disabled?: (date: Date) => boolean
 *   - formatString?: string (default "PPP")
 *   - firstDayOfWeek?: 0|1|2|3|4|5|6 (default 0 Sunday)
 */
export interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: (date: Date) => boolean;
  formatString?: string;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  placeholder?: string;
  id?: string;
  className?: string;
}

export default function DatePicker({
  value,
  onChange,
  minDate,
  maxDate,
  disabled,
  formatString = "PPP",
  firstDayOfWeek = 0,
  placeholder = "Pick a date",
  id,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState<Date>(() => value ?? new Date());
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const label = value ? format(value, formatString) : placeholder;

  const handleSelect = (d: Date) => {
    if (isDisabled(d, { minDate, maxDate, disabled })) return;
    onChange?.(d);
    setOpen(false);
    // return focus to trigger for a11y
    requestAnimationFrame(() => buttonRef.current?.focus());
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          id={id}
          ref={buttonRef}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={
            "inline-flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-50 " +
            (className ?? "")
          }
        >
          <CalendarIcon className="size-4" aria-hidden />
          <span className="min-w-32 text-left">{label}</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          align="start"
          className="z-50 rounded-2xl border bg-white p-3 shadow-xl outline-none"
        >
          <Calendar
            month={view}
            selected={value ?? null}
            onMonthChange={setView}
            onSelect={handleSelect}
            minDate={minDate}
            maxDate={maxDate}
            disabled={disabled}
            firstDayOfWeek={firstDayOfWeek}
          />
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

interface CalendarProps {
  month: Date;
  onMonthChange: (d: Date) => void;
  selected: Date | null;
  onSelect: (d: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: (date: Date) => boolean;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

function Calendar({
  month,
  onMonthChange,
  selected,
  onSelect,
  minDate,
  maxDate,
  disabled,
  firstDayOfWeek = 0,
}: CalendarProps) {
  const weeks = React.useMemo(() => buildCalendar(month, firstDayOfWeek), [month, firstDayOfWeek]);

  // keyboard nav state
  const [focusDate, setFocusDate] = React.useState<Date>(selected ?? new Date());
  React.useEffect(() => {
    if (selected) setFocusDate(selected);
  }, [selected]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next: Date | null = null;
    if (e.key === "ArrowLeft") next = addDays(focusDate, -1);
    if (e.key === "ArrowRight") next = addDays(focusDate, 1);
    if (e.key === "ArrowUp") next = addDays(focusDate, -7);
    if (e.key === "ArrowDown") next = addDays(focusDate, 7);
    if (e.key === "Home") next = startOfWeek(focusDate, { weekStartsOn: firstDayOfWeek });
    if (e.key === "End") next = endOfWeek(focusDate, { weekStartsOn: firstDayOfWeek });
    if (e.key === "PageUp") next = addMonths(focusDate, -1);
    if (e.key === "PageDown") next = addMonths(focusDate, 1);
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(focusDate);
      return;
    }
    if (next) {
      e.preventDefault();
      setFocusDate(next);
      if (next.getMonth() !== month.getMonth()) onMonthChange(next);
    }
  };

  return (
    <div className="w-80" role="dialog" aria-label="Choose date">
      <div className="mb-2 flex items-center justify-between">
        <button
          onClick={() => onMonthChange(addMonths(month, -1))}
          className="rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/20"
          aria-label="Previous month"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="text-sm font-medium">{format(month, "MMMM yyyy")}</div>
        <button
          onClick={() => onMonthChange(addMonths(month, 1))}
          className="rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/20"
          aria-label="Next month"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <table className="w-full border-collapse select-none" role="grid" aria-labelledby="calendar-label">
        <thead>
          <tr className="text-[11px] text-gray-500">
            {weekdayHeaders(firstDayOfWeek).map((d) => (
              <th key={d} className="h-8 w-8 p-0 text-center font-normal">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody onKeyDown={onKeyDown}>
          {weeks.map((week, wi) => (
            <tr key={wi} className="text-sm">
              {week.map((day) => {
                const outside = !isSameMonth(day, month);
                const selectedFlag = selected ? isSameDay(day, selected) : false;
                const isBlocked = isDisabled(day, { minDate, maxDate, disabled });
                const isFocused = isSameDay(day, focusDate);

                return (
                  <td key={day.toISOString()} className="p-0">
                    <button
                      type="button"
                      onClick={() => onSelect(day)}
                      disabled={isBlocked}
                      aria-pressed={selectedFlag}
                      aria-current={isSameDay(day, new Date()) ? "date" : undefined}
                      className={[
                        "m-1 flex h-8 w-8 items-center justify-center rounded-full outline-none transition",
                        outside ? "text-gray-300" : "text-gray-900",
                        selectedFlag ? "bg-black text-white" : "hover:bg-gray-100",
                        isBlocked ? "cursor-not-allowed opacity-40" : "",
                        isFocused ? "ring-2 ring-black/30" : "",
                      ].join(" ")}
                      tabIndex={isFocused ? 0 : -1}
                    >
                      {day.getDate()}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function weekdayHeaders(firstDayOfWeek: number) {
  const base = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return base.slice(firstDayOfWeek).concat(base.slice(0, firstDayOfWeek));
}

function buildCalendar(month: Date, firstDayOfWeek: number) {
  const start = startOfWeek(startOfMonth(month), { weekStartsOn: firstDayOfWeek as 0 | 1 | 2 | 3 | 4 | 5 | 6 });
  const end = endOfWeek(endOfMonth(month), { weekStartsOn: firstDayOfWeek as 0 | 1 | 2 | 3 | 4 | 5 | 6 });
  const days = eachDayOfInterval({ start, end });
  const weeks: Date[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function isDisabled(
  date: Date,
  opts: { minDate?: Date; maxDate?: Date; disabled?: (d: Date) => boolean }
) {
  const { minDate, maxDate, disabled } = opts;
  if (minDate && isBefore(date, startOfDay(minDate))) return true;
  if (maxDate && isAfter(date, endOfDay(maxDate))) return true;
  if (disabled && disabled(date)) return true;
  return false;
}

function startOfDay(d: Date) {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}
function endOfDay(d: Date) {
  const c = new Date(d);
  c.setHours(23, 59, 59, 999);
  return c;
}

// Demo usage (remove if you embed into your app directly)
export function Demo() {
  const [date, setDate] = React.useState<Date | null>(new Date());
  return (
    <div className="flex min-h-48 items-center justify-center p-6">
      <div className="max-w-sm">
        <label htmlFor="demo" className="mb-2 block text-sm font-medium">Date</label>
        <DatePicker id="demo" value={date} onChange={setDate} />
        <p className="mt-2 text-sm text-gray-600">Selected: {date ? format(date, "PP") : "none"}</p>
      </div>
    </div>
  );
}
