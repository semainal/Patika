## Binary Search Tree

1. [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Root: 7

           7
          / \
         5   8
        / \   \
       1   6   9
      / \
     0   3
        / \
       2   4

1.Aşama: 5<7 => sol tarafa 
2.Aşama: 1<7 , 1<5 => sol tarafa
3.Aşama: 8>7 => sağ tarafa
4.Aşama: 3<7 , 3<5 , 3>1 sağ tarafa
5.Aşama: 6<7 , 6>5 => sağ tarafa
6.Aşama: 0<7 , 0<5 , 0<1 => sol tarafa
7.Aşama: 9>7 , 9>8 => sağ tarafa
8.Aşama: 4<7 , 4<5 , 4>1 , 4>3 => sağ tarafa
9.Aşama: 2<7 , 2<5 , 2>1 , 2<1 => sol tarafa 