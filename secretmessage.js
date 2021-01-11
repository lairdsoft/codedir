let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
>
> secretMessage.pop([23]);
> // this removes 'javaScript' from array
>
> secretMessage.push('to', 'Program'); //this will add to and Program
>
> secretMessage[7] = 'right';
> //this replaced easily with right
>
> secretMessage.shift();
> //removes Learning from beginning
>
> secretMessage.unshift('Programming');
> //adds 'Programming' to start
>
> secretMessage.splice(6,10);
>
> console.log(secretMessage.join(' '));
>
