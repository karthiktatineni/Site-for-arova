$path = "c:\Users\karth\Desktop\Int\arova-cms\app\studio\[[...index]]\page.tsx"
$content = @"
"use client";

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
"@
Set-Content -LiteralPath $path -Value $content -Force
Remove-Item -LiteralPath "c:\Users\karth\Desktop\Int\arova-cms\app\studio\[" -Recurse -Force -ErrorAction SilentlyContinue
