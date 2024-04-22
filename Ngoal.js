const input=require("readline-sync")
// WAP to input 10 numbers and find average./////////////////////////////////////

/*let sum=0;
let n=input.questionInt("enter a number:")
let arr=[]
for(let i=0;i<n;i++)
{
    arr[i]=input.questionInt("enter a element");

}let j=0;
while(j<n)
{
    sum+=arr[j];
    j++;
}
avarge =Math.floor(sum/n)
console.log("avarge",avarge);*/

///////////////// WAP to input 10 numbers in array and find 2nd largest and 2nd smallest number.

// let largest;
// let smallest;
/*let n=input.questionInt("enter a number:")
let arr=[]
for(let i=0;i<n;i++)
{
    arr[i]=input.questionInt("enter a element");

}

console.log(arr);
let largest=arr[0]
for(let i=0;i<n;i++)
{
  
    
        if(arr[i]>largest)
        {
          largest=arr[i];
        }
    
   
}
console.log("largest no.",largest);*/

//////////////////WAP that splits an array into odd and even numbers separately.////////////////////////////////////////////////////
/*let n=input.questionInt("enter a number:")
let arr=[]
for(let i=0;i<n;i++)
{
    arr[i]=input.questionInt("enter a element");

}
console.log(arr);
let k=0;
let l=0;
let arr1=[];
let arr2=[];
for (let i = 0; i < n; i++) {
  if (arr[i]%2==0)
  {
    arr1[k]=arr[i];
    k++;
  }
  else{
    arr2[l]=arr[i];
    l++;
  }
    
}
console.log("even-",arr1,"\n","odd-",arr2);//*/


/////////////////////////////////////////////////////////////
/*let n= input.questionInt("enter a number:")
let s="";
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=n-i/2;j++)
    {
      s+=j;
    
    }
    s+="\n"
}
    console.log(s);*/


// WAP to display multiplication table from 1 to 10.////////////////////////////// 
/*let n=input.questionInt("enter a number:")
let p=1;
k=1;
for(let i=1;i<=n;i++){
    if(i%2==0){
        k=i/k
    }
    else{
        p=p*i
    }
}
console.log(k,"\n",p);//*/


/////////////// factors////////////////////////////////////////////////////////
/*let n=input.questionInt("enter a num:")
let k;
let v;
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=i;j++)
    {
        k=i%j;
        console.log(k);            

    v= k;
    }
    // console.log(v);
}
console.log(v);*/


/*///////////////////////////////////////////////////////////////////////
* * * * *
 * * * *
  * * *
   * *
    *
   * *
  * * *
 * * * *
* * * * **/
/*let n=input.questionInt("enter a num:")
let spaces = 1;
for (let i = 0; i <= n-1 ; i++) {
    let pattern = '';
    for (let j = 1; j <= spaces; j++) {
        pattern += ' ';
    }
    spaces++;
    for (let k = 1; k <= 2 * (n - i) - 1; k++) {
        pattern += '*';
    }
    console.log(pattern);
}
 spaces = n - 1;
for (let i = 2; i <= n; i++) {
    let pattern = '';
    for (let j = 1; j <= spaces; j++) {
        pattern += ' ';
    }
    spaces--;
    for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += '*';
    }
    console.log(pattern);
}
*/

// for(let i=0;i<n/2;i++)
// {
  
// arr1[j]=arr[i]
// j++;
// }
// console.log(arr1);*/

//////////////////////////////////////////////////////////////////////
/*let n=input.questionInt("no.:")
let m=input.questionInt("no.:")
let a=[];
let a1=[];
let a2=[];
// let i=0;
// let j=0;
let s=''


for(let i=0;i<n;i++)
{
    a[i]=input.questionInt("enter :")
    
}console.log(a)
for (let j=0;j<m;j++) {
    a1[j]=input.questionInt("enter a no.:")
}
console.log(a1)
    
  
  for (i=0; i<2; i++)
  {
    if (i==0)
    {
      a2[i]=a;
    }
    else
    {
      a2[i]=a1;
    }
    
  }
    j=0;
  console.log(a2);
  for(i=0; i<n; i++)
  {
    a2[j]=a[i];
    j++;
  }
  for (i=0; i<m; i++)
  {
    a2[j]=a1[i];

    j++;
  }
  console.log(a2)*/

 ////////2nd largest/////////////////////////////////////////////////////////////////////////////// 
  /*let n=input.questionInt("enter a number:")
  let arr=[]
  for(let i=0;i<n;i++)
  {
      arr[i]=input.questionInt("enter a element");
  
  }
  
  console.log(arr);

  let largest = arr[0];
  let slargest = -1;
  for(let i =1; i<n; i++){
      if(arr[i]>largest){
          Slargest=largest;
          largest=arr[i];
      }
      else if(arr[i]<largest&&arr[i]>slargest){
          slargest=arr[i];
      }
  
  }
  console.log(slargest)*/

/////////smallest/////////////////////////////////////////////////////////////////////////
/*let n=input.questionInt("enter a number:")
  let arr=[]
  for(let i=0;i<n;i++)
  {
      arr[i]=input.questionInt("enter a element");
  
  }
  
  console.log(arr);
  let smallest=arr[0];
  // let Ssmallest=-1
  for(let i=0;i<n;i++)
  {
    if(arr[i]<smallest)
    {
  //  Ssmallest=smallest;

      smallest=arr[i];

    }
  //   else if(arr[i]<smallest&&arr[i]<Ssmallest)
  //   {
  //     Ssmallest=arr[i];
  // }
  // // console.log(Ssmallest);

}
  console.log(smallest);*/
 
 //////////////BINNARY SEARCH///////////////////////////////////////////////////////////////////
/*let n=input.questionInt("enter a number:")
let arr=[]
// let arr1=[];
let j=0
for(let i=0;i<n;i++)
{
    arr[i]=input.questionInt("enter a element");

}
console.log(arr);
let key=input.questionInt("enter a number;")
let d=''
let start=0;
let ends=n-1
let i=0;

for(let i=0;i<n;i++)

{ 
   let  mid=start+ends/2;

  if(mid==key) 
{
    d='yes'
} 
else if(mid>key)
{
    m=mid-1;
}
k=mid+1;
}
console.log(d);*/
////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////    10 april               //////////////////////////
//  ----1----
//  ---222---
//  --33333--
//  -4444444-
//  555555555
//  -1111111-
//  --22222--
//  ---333---
//  ----4----
/*let n=input.questionInt("enter a number;")
let spaces=n-1;
let spac=n-1;
for(let i=1;i<=n;i++)
{
  let s="";
 for(let j=1;j<=spaces;j++)
 {
  s+="-";
 }
 spaces--
 for(let k=1;k<=i;k++)
 {
  s+=" "+(i+1)
 }
 for(let h=1;h<=spac;h++)
 {
   s+="-";
 }
 spac--
console.log(s);
}
spaces=1;
spac=1
for(let i=1;i<n;i++)
{
let s='';
for(let j=1;j<=spaces;j++)
{
  s+="-";
}
spaces++;
for(let k=1;k<=n-i;k++)
{
  s+=" "+(i+2);
}
for(h=1;h<=spac;h++)
{
  s+="-";
}
spac++
console.log(s);
}*/
// *** ***
// **   **
// *     *

// *     *
// **   **
// *** ***
// let n=input.questionInt("enter a number;")
// let spaces=n-1;
// let spac=n-1;
// for(let i=1;i<=n;i++)
// {
//   let s="";
//  for(let j=1;j<=spaces;j++)
//  {
//   s+="-";
//  }
//  spaces--
// // }
// // console.log(s);
//  for(let k=1;k<=i;k++)
//  {
//   s+=" *"
//  }
//  for(let h=1;h<=spac;h++)
//  {
//    s+="-";
//  }
//  spac--
// console.log(s);
// }
// spaces=1;
// spac=1
// for(let i=1;i<n;i++)
// {
// let s='';
// for(let j=1;j<=spaces;j++)
// {
//   s+="-";
// }
// spaces++;
// for(let k=1;k<=n-i;k++)
// {
//   s+=" *"
// }
// for(h=1;h<=spac;h++)
// {
//   s+="-";
// }
// spac++
// console.log(s);
// }

// 4_4_3_2
//   3_4_3
//    2_4
//     1
//   2_4
//  3_4_3  
// 4_4_3_2

/*let n=input.questionInt("enter a number;")
let spaces=1;
let star=n
let high=1

for(let i=1;i<=n;i++)

{
  let s=""

  for(k=1;k<=spaces;k++)
  {
    s+="-";
  }
 spaces++;
 for(let j=1;j<=star;j++)
  {
    s+="_"+(j+i)
  }
  star--;
  for(let h=1;h<=high;h++)
  {
    s+="-";
  }
  high++
 console.log(s);
}
 spaces=n-1;
 star=2;
 high=n-1;
 for(let i=1;i<=n;i++)
 {
  s="";
  for(let j=1;j<=spaces;j++)
  {
    s+="-";
  }
  spaces--;
  for(let k=1;k<=star;k++)
  {
    s+="_"+(k+i);
  }
  star++;
  for(let h=1;h<=high;h++)
  {
    s+="-";
  }
  high--;
  console.log(s);
 }*/

//  *       *
//  **     **
//  ***   ***
//  **** ****////////////////////////////////////////////////////////
//  ***   ***
//  **     **
//  *       *
/* let n=input.questionInt("enter a number;")
let spaces=1;
let star=n
let high=1

for(let i=1;i<=n;i++)

{
  let s=""

  for(k=1;k<=spaces;k++)
  {
    s+="-";
  }
 spaces++;
 for(let j=1;j<=star;j++)
  {
    s+="  "
  }
  star--;
  for(let h=1;h<=high;h++)
  {
    s+="-";
  }
  high++
 console.log(s);
}
 spaces=n-1;
 star=2;
 high=n-1;
 for(let i=1;i<=n;i++)
 {
  s="";
  for(let j=1;j<=spaces;j++)
  {
    s+="-";
  }
  spaces--;
  for(let k=1;k<=star;k++)
  {
  s+="  "
  }
  star++;
  for(let h=1;h<=high;h++)
  {
    s+="-";
  }
  high--;
  console.log(s);
 }*/
 //////////MERGE AND SORTING///////////////////////////////////////////////////////////////////////////////
//  let arr1=[7,2,6,1];
//  let arr2=[4,5,3,8]
//  let arr3=[];
//  let k=0
//  for(let i=0;i<arr1.length;i++)
//  {
 
//      arr3[k]=arr1[i];
//      k++;
//  }
//  for(let j=0;j<arr2.length;j++)
//  {
 
    
//      arr3[k]=arr2[j];
//      k++;
 
//  }
//  console.log(arr3);
//  for(let i=0;i<arr3.length;i++)
//  {
//      for(j=0;j<arr3.length;j++)
//      {
 
     
//      if(arr3[j]>arr3[j+1])
//      {
//          temp=arr3[j];
//       arr3[j]=arr3[j+1];
//    arr3[j+1]=temp; 
//      }
//  }
//  }
//  console.log(arr3);

 ///////ARRAY  ROTATION////////////////////////////////////////////////////////////////////////////
 /*let n=input.questionInt("enter a number:")
 let arr=[];
 for(let i=0;i<n;i++)
 {
  arr[i]=input.questionInt("enter a num:")
 }
 console.log(arr);
 for(let i=0;i<n;i++)
 {
  for(let j=i+1;j<n;j++)
  {
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;

  }

 }
 console.log(arr);*/
 /////17 APRIL////////////////////////////////////////////////////////////////////////////////

// INCRESING 

/*let n=input.questionInt("enter ")
arr=[];
for(let i=0;i<n;i++)
{
    arr[i]=input.questionInt("enter a element:")
}
console.log(arr);
for(let i=0;i<n;i++)
{
    for(j=i+1;j<n;j++){

    
    if(arr[i]>arr[j])
    {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp
    }
}
}
console.log(arr);*/


// DECRESING
/*let n=input.questionInt("enter ")
arr=[];
for(let i=0;i<n;i++)
{
    arr[i]=input.questionInt("enter a element:")
}
console.log(arr);
for(let i=0;i<n;i++)
{
    for(j=i+1;j<n;j++){

    
    if(arr[i]<arr[j])
    {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp
    }
}
}
console.log(arr);*/


// 1 TO 100 PRIME NUMBERS PRINT



// let n=input.questionInt("enter a num:")

/*let i=1;

while (i<=n) {
  {
    let c=0
    let j=1;
    while(j<=i)
    {
      if(i%j==0)
      {
        c++;
      }
      j++;
    }
    if(c==2)
  {
    console.log(i);
  }
  } 
  i++;
}*/



// PRIME FACTOSITION

// let n=input.questionInt("enter a num:")
/*for(let i=1;i<=n;i++)
{
  let c=0

  if(n%i==0)
  {
    for(let j=1;j<=i;j++)
    {
      if(i%j==0)
      {
        c++
      }
    }
  }
  if(c==2)
  {
    console.log(i);
  }
}*/

/*let n=input.questionInt("enter ")
let arr=[];
for (let i = 0; i < n; i++) {
arr[i] =input.questionInt("enter a element:") 
}
console.log(arr);
let p=1;

for(let j=0;j<arr.length;j++)
{
  if(arr[j]%2==0)
  {
    p=p*j
  }
  j++;
  console.log(p);

}*/

// console.log(arr);

