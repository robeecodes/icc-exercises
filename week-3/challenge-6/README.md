## Members

<dl>
<dt><a href="#x1">x1</a> : <code>number</code></dt>
<dd><p>The first x-coordinate of the line</p>
</dd>
<dt><a href="#x2">x2</a> : <code>number</code></dt>
<dd><p>The second x-coordinate of the line</p>
</dd>
<dt><a href="#y1">y1</a> : <code>number</code></dt>
<dd><p>The first y-coordinate of the line</p>
</dd>
<dt><a href="#y2">y2</a> : <code>number</code></dt>
<dd><p>The second y-coordinate of the line</p>
</dd>
<dt><a href="#weight">weight</a> : <code>number</code></dt>
<dd><p>The weight of the line</p>
</dd>
<dt><a href="#mode">mode</a> : <code>string</code></dt>
<dd><p>The current mode of the line</p>
</dd>
<dt><a href="#keypresses">keypresses</a> : <code>number</code></dt>
<dd><p>The number of times the user has pressed a key</p>
</dd>
<dt><a href="#ratio">ratio</a> : <code><a href="#AspectRatio">AspectRatio</a></code></dt>
<dd><p>The aspect ratio of the canvas</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#MODES">MODES</a> : <code>Array.&lt;string&gt;</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getRatio">getRatio()</a> ⇒ <code><a href="#AspectRatio">AspectRatio</a></code></dt>
<dd><p>Gets the aspect ratio of the canvas by finding greatest common factor</p>
</dd>
<dt><a href="#diagonalMousePosition">diagonalMousePosition(x1, y1, x2, y2)</a> ⇒ <code>number</code></dt>
<dd><p>Find if the mouse is above or below the diagonal line. A negative number means it&#39;s above, positive is below.</p>
</dd>
<dt><a href="#initLine">initLine()</a></dt>
<dd><p>Initialise the line based on the current mode</p>
</dd>
<dt><a href="#changeWeight">changeWeight(amount)</a></dt>
<dd><p>Change the weight of the stroke</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AspectRatio">AspectRatio</a> : <code>Object</code></dt>
<dd><p>the aspect ratio of the canvas</p>
</dd>
</dl>

<a name="x1"></a>

## x1 : <code>number</code>
The first x-coordinate of the line

**Kind**: global variable  
<a name="x2"></a>

## x2 : <code>number</code>
The second x-coordinate of the line

**Kind**: global variable  
<a name="y1"></a>

## y1 : <code>number</code>
The first y-coordinate of the line

**Kind**: global variable  
<a name="y2"></a>

## y2 : <code>number</code>
The second y-coordinate of the line

**Kind**: global variable  
<a name="weight"></a>

## weight : <code>number</code>
The weight of the line

**Kind**: global variable  
<a name="mode"></a>

## mode : <code>string</code>
The current mode of the line

**Kind**: global variable  
**See**: MODES  
<a name="keypresses"></a>

## keypresses : <code>number</code>
The number of times the user has pressed a key

**Kind**: global variable  
<a name="ratio"></a>

## ratio : [<code>AspectRatio</code>](#AspectRatio)
The aspect ratio of the canvas

**Kind**: global variable  
<a name="MODES"></a>

## MODES : <code>Array.&lt;string&gt;</code>
**Kind**: global constant  
**Default**: <code>[&quot;vertical&quot;,&quot;horizontal&quot;,&quot;diagonal&quot;]</code>  
<a name="getRatio"></a>

## getRatio() ⇒ [<code>AspectRatio</code>](#AspectRatio)
Gets the aspect ratio of the canvas by finding greatest common factor

**Kind**: global function  

* [getRatio()](#getRatio) ⇒ [<code>AspectRatio</code>](#AspectRatio)
    * [~factor](#getRatio..factor) : <code>number</code>
    * [~aspectWidth](#getRatio..aspectWidth) : <code>number</code>
    * [~aspectHeight](#getRatio..aspectHeight) : <code>number</code>

<a name="getRatio..factor"></a>

### getRatio~factor : <code>number</code>
Starts equal to the width or height, whichever is smallest, and decrements until the greatest common factor is found

**Kind**: inner property of [<code>getRatio</code>](#getRatio)  
<a name="getRatio..aspectWidth"></a>

### getRatio~aspectWidth : <code>number</code>
The width of the aspect ratio of the canvas

**Kind**: inner property of [<code>getRatio</code>](#getRatio)  
<a name="getRatio..aspectHeight"></a>

### getRatio~aspectHeight : <code>number</code>
The height of the aspect ratio of the canvas

**Kind**: inner property of [<code>getRatio</code>](#getRatio)  
<a name="diagonalMousePosition"></a>

## diagonalMousePosition(x1, y1, x2, y2) ⇒ <code>number</code>
Find if the mouse is above or below the diagonal line. A negative number means it's above, positive is below.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | The first x-coordinate of the line |
| y1 | <code>number</code> | The first y-coordinate of the line |
| x2 | <code>number</code> | The second x-coordinate of the line |
| y2 | <code>number</code> | The second y-coordinate of the line |


* [diagonalMousePosition(x1, y1, x2, y2)](#diagonalMousePosition) ⇒ <code>number</code>
    * [~dx](#diagonalMousePosition..dx) : <code>number</code>
    * [~dy](#diagonalMousePosition..dy) : <code>number</code>
    * [~mx](#diagonalMousePosition..mx) : <code>number</code>
    * [~my](#diagonalMousePosition..my) : <code>number</code>

<a name="diagonalMousePosition..dx"></a>

### diagonalMousePosition~dx : <code>number</code>
The difference between the two x-coordinates

**Kind**: inner property of [<code>diagonalMousePosition</code>](#diagonalMousePosition)  
<a name="diagonalMousePosition..dy"></a>

### diagonalMousePosition~dy : <code>number</code>
The difference between the two y-coordinates

**Kind**: inner property of [<code>diagonalMousePosition</code>](#diagonalMousePosition)  
<a name="diagonalMousePosition..mx"></a>

### diagonalMousePosition~mx : <code>number</code>
The difference between the mouse x-coordinate and first x-coordinate

**Kind**: inner property of [<code>diagonalMousePosition</code>](#diagonalMousePosition)  
<a name="diagonalMousePosition..my"></a>

### diagonalMousePosition~my : <code>number</code>
The difference between the mouse y-coordinate and first y-coordinate

**Kind**: inner property of [<code>diagonalMousePosition</code>](#diagonalMousePosition)  
<a name="initLine"></a>

## initLine()
Initialise the line based on the current mode

**Kind**: global function  
<a name="changeWeight"></a>

## changeWeight(amount)
Change the weight of the stroke

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | the amount to change the stroke weight by |

<a name="AspectRatio"></a>

## AspectRatio : <code>Object</code>
the aspect ratio of the canvas

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | the width of the aspect ratio of the canvas |
| height | <code>number</code> | the height of the aspect ratio of the canvas |

