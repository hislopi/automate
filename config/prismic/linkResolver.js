exports.linkResolver = doc => {
  // URL for a page type
  if (doc.type === "page") {
    return `/${doc.uid}`
  }

  if (doc.type === "case_studies") {
    return `/case-studies/${doc.uid}`
  }

  // Backup for all other types
  return "/"
}
