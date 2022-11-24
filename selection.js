function selectionSort(array){
    for(let i = 0; i < array.length;i++){
        const currentValue = array[i]
        let minorValuePosition = i
        for(let j = i+1; j < array.length;j++){
            if(array[minorValuePosition] > array[j] ){
                minorValuePosition = j
            }
        }
        array[i] = array[minorValuePosition]
        array[minorValuePosition]= currentValue
    }

    return array
}


console.log(selectionSort([9,8,1,7,6,5,4]))