import { createLLMsFullTxtHandler } from '@sonordev/site-kit/llms'
import { getLocalLlmsData } from '@/lib/llms-data'

/**
 * The extended index. llms.txt links to /llms-full.txt in its "Full context"
 * section, and until now that link 404'd.
 */
export const GET = createLLMsFullTxtHandler({
  preferStatic: true,
  getLocalData: getLocalLlmsData,
})

export const revalidate = 3600
