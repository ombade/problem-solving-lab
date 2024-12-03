#include<iostream>

using namespace std;

//array should be sorted in ascending order//

bool pairsum (int arr[], int n, int k){
    int high=n-1;
    int low=0;

    while(low<high){
        if(arr[low]+arr[high]==k){
            cout<<low+1<<" "<<high+1<<endl;
            return true;

        }

        else if(arr[high]+arr[low]>k){
            high--;
        }
        else{
            low++;
        }
        
    }
   return false;

}

int main(){
    int n;
    cin>>n;

    int arr[n];
    for(int i=0; i<n;i++){
        cin>>arr[i];
    }

    int k;
    cin>>k;
    
    cout<<pairsum(arr, n,k)<<endl;
    return 0;
}