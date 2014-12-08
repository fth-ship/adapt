#Index

**Classes**

* [class: Learn](#Learn)
  * [new Learn()](#new_Learn)

**Functions**

* [add(obj, score)](#add)
* [getSeries()](#getSeries)
* [getNextOf(n)](#getNextOf)
* [getOf(n)](#getOf)
* [getPreviousOf(n)](#getPreviousOf)
* [adapt(currentScore, flag)](#adapt)
 
<a name="Learn"></a>
#class: Learn
**Members**

* [class: Learn](#Learn)
  * [new Learn()](#new_Learn)

<a name="new_Learn"></a>
##new Learn()
Used to meta learn based on score.

<a name="add"></a>
#add(obj, score)
Method to add to series,
meta information and given score.

**Params**

- obj `Object` - meta information  
- score `Number` - score number  

**Returns**: [Learn](#Learn) - self  - self instance  
<a name="getSeries"></a>
#getSeries()
Get series inserted sorted by score and given value.

**Returns**: `Array` - self.series  
<a name="getNextOf"></a>
#getNextOf(n)
Get next position in series based on a number of score

**Params**

- n `Number` - an number  

**Returns**: `Object` - out  or {Null}  
<a name="getOf"></a>
#getOf(n)
Get actual position in series based on number of score

**Params**

- n `Number` - an number  

**Returns**: `Object` - out  or {Null}  
<a name="getPreviousOf"></a>
#getPreviousOf(n)
Get previous position in series based on a number

**Params**

- n `Number` - an number  

**Returns**: `Object` - out  or {Null}  
<a name="adapt"></a>
#adapt(currentScore, flag)
Adapt position position in serie based on params

**Params**

- currentScore `Number` - an number  
- flag `Boolean` - or {Null} - an flag  

**Returns**: `Object` - out  or {Null}  
