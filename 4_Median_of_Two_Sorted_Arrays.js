/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
  let tempArr = []
  let i = 0
  let j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1 < nums2) {
      tempArr.push(nums1[i++])
    } else {
      tempArr.push(nums2[j++])
    }
  }

  if (i < nums1.length) {
    tempArr = tempArr.concat(nums1.slice(i))
  }

  if (j < nums2.length) {
    tempArr = tempArr.concat(nums2.slice(j))
  }

  if (Math.floor(tempArr.length / 2) === 0) {
    return (tempArr[Math.floor(tempArr.length / 2)] + tempArr[Math.floor(tempArr.length / 2) - 1]) / 2
  } else {
    return tempArr[Math.floor(tempArr.length / 2)]
  }
}

let findMedianSortedArrays = function(nums1, nums2) {
  let left = -1
  let right = -1

  for (let i = 0, m = 0, n = 0; i <= Math.floor((nums1.length + nums2.length) / 2); i++) {
    left = right
    if (m < nums1.length && nums1[m] < nums2[n]) {
      right = nums1[m++]
    } else if (n < nums2.length && nums1[m] >= nums2[n]) {
      right = nums2[n++]
    } else if (m < nums1.length) {
      right = nums1[m++]
    } else if (n < nums2.length) {
      right = nums2[n++]
    }
  }

  if ((nums1.length + nums2.length) % 2 === 0) {
    return (left + right) / 2
  } else {
    return right
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
  let n = nums1.length
  let m = nums2.length
  let l = Math.floor((m + n + 1) / 2)
  let r = Math.floor((m + n + 2) / 2)
  return (findKthMin(nums1, 0, nums2, 0, l) + findKthMin(nums1, 0, nums2, 0, r)) / 2
}

let findKthMin = (nums1, start1, nums2, start2, k) => {
  let len1 = nums1.length - start1
  let len2 = nums2.length - start2

  if (len1 > len2) {
    return findKthMin(nums2, start2, nums1, start1, k)
  }
  if (len1 === 0) {
    return nums2[start2 + k - 1]
  }
  if (k === 1) {
    return Math.min(nums1[start1], nums2[start2])
  }

  let i = start1 + Math.min(len1, Math.floor(k / 2)) - 1
  let j = start2 + Math.min(len2, Math.floor(k / 2)) - 1

  if (nums1[i] > nums2[j]) {
    return findKthMin(nums1, start1, nums2, j + 1, k - Math.min(len2, Math.floor(k / 2)))
  } else {
    return findKthMin(nums1, i + 1, nums2, start2, k - Math.min(len1, Math.floor(k / 2)))
  }
}

let findMedianSortedArrays = function(nums1, nums2) {
  let N1 = nums1.length
  let N2 = nums2.length

  if (N1 < N2) {
    return findMedianSortedArrays(nums2, nums1)
  }

  let lo = 0
  let hi = N2 * 2
  while (lo <= hi) {
    let mid2 = (lo + hi) >> 1
    let mid1 = N1 + N2 - mid2
    let L1 = mid1 === 0 ? Number.NEGATIVE_INFINITY : nums1[(mid1 - 1) >> 1]
    let L2 = mid2 === 0 ? Number.NEGATIVE_INFINITY : nums2[(mid2 - 1) >> 1]
    let R1 = mid1 == N1 * 2 ? Number.POSITIVE_INFINITY : nums1[mid1 >> 1]
    let R2 = mid2 == N2 * 2 ? Number.POSITIVE_INFINITY : nums2[mid2 >> 1]

    if (L1 > R2) { lo = mid2 + 1 } else if (L2 > R1) { hi = mid2 - 1 } else { return (Math.max(L1, L2) + Math.min(R1, R2)) / 2 }
  }

  return -1
}

findMedianSortedArrays([1, 2], [3, 4])
