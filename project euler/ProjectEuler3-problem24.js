function permutasyon(n, array) {
    const al = array.length
    for (let i = 0; i < n - 1; i++) {
      let k, l
      for (let j = 0; j < al - 1; j++) {
        if (array[j] < array[j + 1]) {
          k = j
        }
      }
      for (let j = k; j < al; j++) {
        if (array[k] < array[j]) {
          l = j
        }
      }
      let tmp = array[k]
      array[k] = array[l]
      array[l] = tmp
      let bas = k + 1
      let son = al - 1
      while (bas < son) {
        tmp = array[bas]
        array[bas] = array[son]
        array[son] = tmp
        bas += 1
        son -= 1
      }
    }
    return array
  }
  console.log(permutasyon(1000000, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).join(""))
  