const existingSlugs: Set<string> = new Set()

export function generateSlug(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  let uniqueSlug = slug
  let counter = 1

  while (existingSlugs.has(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`
    counter++
  }

  existingSlugs.add(uniqueSlug)

  return uniqueSlug
}
