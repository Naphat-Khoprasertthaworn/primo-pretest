

function merge(collections_1:number[], collections_2:number[]):number[]{
    let output : number[] = [];
    let i = 0;
    let j = 0;
    while(i < collections_1.length && j < collections_2.length){
        if(collections_1[i] < collections_2[j]){
            output.push(collections_1[i]);
            i++;
        }else{
            output.push(collections_2[j]);
            j++;
        }
    }
    return output.concat(collections_1.slice(i)).concat(collections_2.slice(j));
}


// let a:number[] = [1,3,5,7,9];
// let b:number[] = [2,4,6,8,10,12,14,16,18,20];
// let c:number[] = merge(a,b);
// for(let i of c){
//     console.log(i);
// }
