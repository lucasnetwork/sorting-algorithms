function quickSortRecursion(array,l,r){
    if(l < r-1){
        const pivo = array[l]
        let newPivo = l+1

        for(let i = l+1; i < r; i++){
            if(array[i] < pivo){
                const aux = array[newPivo]
                array[newPivo] = array[i]
                array[i] = aux 
                if(newPivo < r-1){
                    newPivo++       

                }
            }
        }
        if(array[l] > array[newPivo]){
            array[l] = array[newPivo]
            array[newPivo] =pivo

        }
        quickSortRecursion(array,newPivo,r)
        quickSortRecursion(array,l,newPivo)
        

    }
    return array

}


const array=[36,30,36,32,33,25,36,1,2,17,7,21,5,16,12]

console.log(quickSortRecursion(array,0,array.length))