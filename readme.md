# CSS Animation

### Live Link: https://vb1503.github.io/CSS-Animation/

### Spin Animation:
This animation makes an element spin continuously.

```css
.spin {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

```
## Code Explanation:
* **.spin**: This is a CSS class selector. You would apply this class to the HTML element that you want to animate with the spinning effect.

* **animation:** spin 3s linear infinite;: This line of code applies the animation to elements with the class .spin. Let's break it down:

* **animation:** This property is used to specify the animation to be applied to the element.
spin: This is the name of the animation. It corresponds to the `@keyframes` rule defined later in the CSS.


* **3s:** This is the duration of the animation. In this case, it takes 3 seconds for the element to complete a full 360-degree rotation.
linear: This is the timing function or easing function. It means the animation progresses at a constant speed throughout.

* **infinite:** This property specifies that the animation should repeat indefinitely.

* **@keyframes spin { ... }:** This is where the actual animation is defined using the @keyframes rule. The animation is named "spin," which is referenced in the animation property.

> Inside the @keyframes rule, there are two keyframes defined:

> 0%: This represents the starting point of the animation. At 0%, the element has no rotation (0 degrees).

> 100%: This represents the endpoint of the animation. At 100%, the element has completed a full rotation of 360 degrees.

> Between these keyframes, the transform property is used to specify the rotation of the element. It goes from rotate(0deg) at 0% to rotate(360deg) at 100%, creating a continuous rotation effect.

# Wave Animation
```css
.wave{
    position: relative;
    width: 500px;
    height: 500px;
    transform-style:preserve-3d ;
    transform: perspective(800px) rotateX(60deg);
}

.wave div{
    position: absolute;
    display: block;
    border:10px solid #fff;
    box-sizing: 0 8px 0 #ccc;
    border-radius: 50%;
    animation: wave 3s ease-in-out infinite;
    top: calc(var(--i)*10px);
    left: calc(var(--i)*10px);
    bottom: calc(var(--i)*10px);
    right: calc(var(--i)*10px);
    animation-delay: calc(var(--i)*0.1s);
}

@keyframes wave{
    0%,
    100%{
        transform: translateZ(-120px);
    }
    50%{
        transform: translateZ(120px);
    }
}

```
With a Custom CSS variable --i from 1 to 20 for creating 3d ring structure with manipulated sizes using calc function

The top, left, bottom, and right properties are used to position each element relative to the parent container based on the custom variable --i.

animation-delay is set using the calc function to create a staggered animation effect for each element based on the --i variable.

**@keyframes wave{..} creates this animation Ranges:**

* At 0% and 100%, the elements are translated along the Z-axis to create a wave-like motion, moving backward and forward.

* At 50%, the elements move in the opposite direction, creating a wave effect.
The transform property is used to achieve this motion.