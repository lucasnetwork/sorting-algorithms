
function bubbleSort(array){
    for(let i = 0; i < array.length;i++){
        for(let j = 0; j < array.length-i;j++){
            if(array[j] > array[j+1]){
                const aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux 
            }
        }
    }

    return array
}

console.log(bubbleSort([9,8,1,7,6,5,4]))