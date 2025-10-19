#include<iostream.h>
#include<conio.h>
  class new{
    private: a,b;
    public: 
     add();
     display();         
  };
  new :: void add(){
    cout<<"enter two number";
    cin>>a>>b;
  }
  new :: void display(){
    cout<<"output is " <<a+b;
  }
  void main(){
    new aa;
    aa.add();
    aa.disply;
    getch();
  }
