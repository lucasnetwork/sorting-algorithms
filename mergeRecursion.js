function mergeSort(array,length){
    mergesortRecursion(array,0,length-1)
    return array
}

function mergesortRecursion(array,l,r){
    if(l < r){
        const m = l +parseInt((r-l)/2)
        mergesortRecursion(array,l,m)
        mergesortRecursion(array,m+1,r)
        mergeSprtedArrays(array,l,m,r)

    }
        
}

function mergeSprtedArrays(array,l,m,r){
    const left_length = m -l + 1
    const right_length = r -m;
    
    let tempLeft = []
    let tempRight = []

    for(let i = 0; i< left_length;i++){
        tempLeft.push(array[l+i])

    }
    for(let j = 0; j< right_length;j++){
        tempRight.push(array[m+1+j])
    }
    let i,j,k

    for( i = 0,j=0,k=l;k<= r;k++){
         if(((i<left_length) && (j >= right_length) )|| tempLeft[i] <= tempRight[j]){
            array[k] = tempLeft[i];
            i++
         }else{
            array[k] = tempRight[j]
            j++
        }
    }

}

const array=[9,8,7,6,5,4,3,2,1]

console.log(mergeSort(array,array.length))