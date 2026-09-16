import { createLLMsTxtHandler } from '@sonordev/site-kit/llms'
import { getLocalLlmsData } from '@/lib/llms-data'

export const GET = createLLMsTxtHandler({
  preferStatic: true,
  getLocalData: getLocalLlmsData,
})

export const revalidate = 3600
