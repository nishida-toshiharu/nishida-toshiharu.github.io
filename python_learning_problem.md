# 変数・型   
⭐️    
1. 変数xに整数型の数値を代入して、その変数をprintしてください
<details>
<summary>A.</summary>

```
x = 111
print(x)
```

</details>

⭐️    
1. 変数xに整数型の数値を代入し、変数yに別の整数型の数値を代入し、xとyの足し算をして結果をprintしてください
<details>
<summary>A.</summary>

```
x = 111
y = 112
print( x + y )
```
</details>

⭐️    
1. 整数型の変数num1に5を代入、浮動小数点型の変数num2に2.5を代入し、その二つの変数を足した結果を出力するプログラムを作成してください
<details>
<summary>A.</summary>

```
num1 = 5
num2 = 2.5
print( num1 + num2 )
```
</details>


⭐️⭐️    
4.整数型の1,2,3が入っているリストを作成しprintで出力してください
<details>
<summary>A.</summary>

```
li = [1,2,3]
print( li )
```
</details>

# list dict

⭐️⭐️    
5.整数型の1,2,3が入っているリストを作成し、最後の要素をprintで出力
<details>
<summary>A.</summary>

```
li = [1,2,3]
print( li[2] )
```
</details>


⭐️⭐️    
6.整数型の1,2,3が入っているリストを作成し、最初の要素をprintで出力してください
<details>
<summary>A.</summary>

```
li = [1,2,3]
print( li[0] )
```
</details>



⭐️⭐️⭐️    
7.整数型の1,2,3が入っているリストを作成し、最初以外の要素をprintで出力してください
<details>
<summary>A.</summary>

```
li = [1,2,3]
print( li[1:] )
```
</details>



⭐️
8.keyにa,b,c valueに整数型の1,2,3が入っているディクトを作成し、要素をprintで出力してください
<details>
<summary>A.</summary>
```
di = {'a':1,'b':2,'c':3}
print( di )
```
</details>

⭐️⭐️    
9.keyにa,b,c valueに整数型の1,2,3が入っているディクトを作成し、その後メソッドを用いて、要素を(d:4)追加しprintで出力してください
<details>
<summary>A.</summary>

```
di = {'a':1,'b':2,'c':3}
di['d'] = 4
print( di )
```
</details>



⭐️⭐️⭐️    
10.keyにid,name,age valueに100,自分の名前,自分の年齢が入っているディクトを作成
familyのリストを作成し、自分の家族を二人入れてください

familyをdictに追加し、二人目のfamilyの名前を出力してください
<details>
<summary>A.</summary>

```
di = {'id':100,'name':"にしだ",'age':5}
family = ["父","母"]
di["family"] = family
print(di["family"][1])
```
</details>


# 演算子 

⭐️    
11.整数型の変数num1に10を代入し、整数型の変数num2に3を代入し、その二つの変数を割った結果を小数点以下切り捨てで出力するプログラムを作成してください
<details>
<summary>A.</summary>

```
num1 = 10
num2 = 3
print(num1 // num2)
```
</details>

⭐️⭐️    
12.数字が1以上であり、5未満である数字の時Trueを出力する処理を書いてください
<details>
<summary>A.</summary>

```
num = 1
print(1 <= num and num < 5)
# 別解
print(1 <= num < 5)
```
</details>

⭐️⭐️    
13.数字が10超過であり、50未満である数字の時Falseを出力する処理を書いてください
<details>
<summary>A.</summary>

```
num = 11
print(not(10 < num and num < 50))
```
</details>

# if for

⭐️⭐️    
14.整数型の変数numに1から10までの値を順に代入し、その値が偶数である場合にのみその値を出力するプログラムを作成してください
<details>
<summary>A.</summary>

```
num = 1
if num % 2 == 0:
  print("even")
else:
  print("odd")

#別解

if num % 2:
  print("odd")
else:
  print("even")
```
</details>


⭐️⭐️    
15.リスト型の変数list1に「apple」「banana」「cherry」の三つの文字列が代入されています。for文を用いて、list1の各要素を順に出力するプログラムを作成してください
<details>
<summary>A.</summary>

```
list1 = ["apple","banana","cherry"]
for i in list1:
  print(i)
```
</details>


⭐️⭐️    
16.リスト型の変数list1に「apple」「banana」「cherry」の三つの文字列が代入されています。list1の各要素を順に出力し、
"appleが好きです"のように出力してください
<details>
<summary>A.</summary>

```
list1 = ["apple","banana","cherry"]
for i in list1:
  print(i+"が好きです")
```
</details>

⭐️⭐️⭐️    
17.1~100までの数字を出力
その際に、以下の条件を満たしてください
奇数の場合は、"奇数"と出力
偶数は数字を出力
ゾロ目の場合は、"ゾロ目です"と出力する

例:
8
奇数
10
奇数ゾロ目です
<details>
<summary>A.</summary>

```
for i in range(1,100):
  if i % 2 == 1:
    st = "奇数"
    if len(str(i)) > 1 and str(i)[0] == str(i)[1]:
      st += "ゾロ目です"
    print(st)
  else:
    print(i)
```
</details>


# 関数

⭐️⭐️    
18.整数型の引数を1つ取り、その引数を2倍にして返す関数double_numを定義してください。その後、任意の整数を引数にして関数を呼び出し、その結果を出力するプログラムを作成してください。

<details>
<summary>A.</summary>

```
def double_num(num):
  return num * 2

result = double_num(11)
print(result)
```
</details>

⭐️⭐️    
19.整数型の引数を3つ取り、その引数を足して、合計値を2倍にして返す関数double_numを定義してください。その後、任意の整数を引数にして関数を呼び出し、その結果を出力するプログラムを作成してください。

<details>
<summary>A.</summary>

```
def double_num(num1,num2,num3):
re = 2 * (num1 + num2 + num3)
  return re

result = double_num(11,22,33)
print(result)
```
</details>

⭐️⭐️⭐️    
20.文字列型の引数を1つ取り、その引数を逆順にして返す関数reverse_stringを定義してください。その後、任意の文字列を引数にして関数を呼び出し、その結果を出力するプログラムを作成してください。
<details>
<summary>A.</summary>

```
def reverse_string(st):
  st = list(reversed(st))
  return st

result = reverse_string("あいう")
print(result)
```
</details>

# まとめ

⭐️⭐️⭐️⭐️   
21.
yamada = {
  "id":1,
  "name":"yamada",
  "age":20,
  "hoby":"running",
  "phone_number":"090-1111-2222",
  "member_id":[12,33,21]
}
このデータを使ってください

・yamadaさん以外のデータを作成し、id:2で追加してください。member_idまで入れてね。
・作成したデータの、二人目のmember_idの最後を抽出してください
・phone_numberの-を取り除いてください
<details>
<summary>A.</summary>

```
yamada = {
  "id":1,
  "name":"yamada",
  "age":20,
  "hoby":"running",
  "phone_number":"090-1111-2222",
  "member_id":[12,33,21]
}

hamada= {
  "id":2,
  "name":"hamada",
  "age":20,
  "hoby":"running",
  "phone_number":090-1111-2223,
  "member_id":[12,33,22]
}
user_data = [
yamada,
hamada
]


for d in user_data:
  if d["id"] == 2:
    print(d["member_id"][len(d["member_id"])-1])


for d in user_data:
  d["phone_number"] = d["phone_number"].replace("-","")
  print(d)
```
</details>

⭐️⭐️⭐️⭐️⭐️    
22.listのnumsとintのtargetが与えられます。
listの中を足して、targetになるindex番号を返してください

ex)
nums = [2,7,11,15], target = 9
→[0,1]

nums = [3,2,4], target = 6
→[1,2]

nums = [3,3], target = 6
→[0,1]

<難しいので解説が厳しい...>
<details>
<summary>A.</summary>

```
def twoSum(nums: list[int], target: int) -> list[int]:
        nums_hash = {}
        for i, num in enumerate(nums):
            match = target - num
            if match in nums_hash:
                return [nums_hash[match], i]
            nums_hash[num] = i
                
ans = twoSum(nums = [2,7,11,15], target = 9)
print(ans)
```
</details>

⭐️⭐️⭐️    
23.以下のデータを引数に取って、国語・算数・英語の平均点を返す関数を作成してください
scores = {
  "国語":87,"算数": 86,"英語":70,"理科":73,"社会":80
}
<details>
<summary>A.</summary>

```
def mean(scores):
  result = (scores["国語"] + scores["算数"] + scores["英語"]) /3
  return result

print(mean(scores))
```
</details>

⭐️⭐️⭐️    
24.以下のデータを引数に取って、国語・算数・英語の中央値を返す関数を作成してください
scores = {
  "国語":87,"算数": 86,"英語":70,"理科":73,"社会":80
}
<details>
<summary>A.</summary>

```
def mean(scores):
  re = []
  re.extend([scores["国語"],scores["算数"],scores["英語"]])
  median = statistics.median(re)
  return median

print(mean(scores))
```
</details>
