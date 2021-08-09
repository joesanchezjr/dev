export const merge = (arrOfSortables) => {
  const sorted = [...arrOfSortables].sort((a, b) => a.startPx - b.startPx)
  const merged = []
  let reference

  merged.push(sorted[0])

  for (let i = 1; i < sorted.length; i++) {
    reference = merged[merged.length - 1]
    if (sorted[i].startPx > reference.endPx) {
      merged.push(sorted[i])
    } else {
      merged[merged.length - 1] = {
        startPx: reference.startPx,
        endPx: Math.max(sorted[i].endPx, reference.endPx),
      }
    }
  }

  return merged
}

export const mergeAlt = (arrOfSortables) => {
  const sorted = [...arrOfSortables].sort((a, b) => a.startPx - b.startPx)
  const merged = []
  let reference = sorted[0]

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].startPx > reference.endPx) {
      merged.push(reference)
      reference = sorted[i]
    } else {
      reference = {
        startPx: reference.startPx,
        endPx: Math.max(sorted[i].endPx, reference.endPx),
      }
    }
  }

  merged.push(reference)

  return merged
}
