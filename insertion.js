function insertionSort(array){
    for(let i =1; i < array.length; i++){
        let j=i
        while(j > 0 && array[j] < array[j-1])
        {
            const aux = array[j]
            array[j] = array[j-1]
            array[j-1] = aux
            j--
        }
    }
    return array
}

console.log(insertionSort([9,8,1,7,6,5,4]))
