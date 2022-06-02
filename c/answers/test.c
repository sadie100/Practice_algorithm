#include <stdio.h>

int main()
{
    int a = 3;

    int *p1 = &a;

    int *p2; // a의 주소를 저장하려고 한다.

    // p2 = &p1;// p2에 p1의 주소를 저장 (X)

    p2 = p1; // p2에 p1의 값인 a의 주소를 저장 (O)
    printf("%d", *p2);
}