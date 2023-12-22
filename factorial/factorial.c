#include <stdio.h>

unsigned long long factorial(unsigned int n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

int main() {
  int number;
  printf("Enter a number: ");
  scanf("%d", &number);

  if (number < 0) {
    printf("Error! Factorial of a negative number doesn't exist.");
  } else {
    unsigned long long result = factorial(number);
    printf("Factorial of %d = %llu\n", number, result);
  }

  return 0;
}
