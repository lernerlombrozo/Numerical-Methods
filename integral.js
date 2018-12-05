//integrals

min=0;
max=1;
steps=100;
method="ave"

result=integrate(min, max, steps, "max");
console.log(result)

function integrate(min,max,step,method){
    if (["max","min","ave","right","left"].indexOf(method)==-1){
        return('method should be "max", "min", "ave", "right" or "left"')
    }
    step = (max - min) / steps;
    integral=0;
    if (method == "max") {
      for (var i = min; i < max; i = i + step) {
        integral = integral + Math.max(square(i), square(i + step)) * step;
      }
      return integral;
    } else if (method == "min") {
      for (var i = min; i < max; i = i + step) {
        integral = integral + Math.min(square(i), square(i + step)) * step;
      }
      return integral;
    } else if (method == "ave") {
      for (var i = min; i < max; i = i + step) {
        integral = integral + (square(i)+ square(i + step))/2 * step;
      }
      return integral;
    } else if (method == "right") {
        for (var i = min; i < max; i = i + step) {
            integral = integral + square(i + step)* step;
        }
        return integral;
    } else if (method == "left") {
        for (var i = min; i < max; i = i + step) {
            integral = integral + square(i) * step;
        }
        return integral;
    }
}

function square(x){
    return x*x;
}