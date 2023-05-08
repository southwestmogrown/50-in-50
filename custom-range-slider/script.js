const range = document.getElementById('range');

const scale = (num, inMin, inMax, outMin, outMax) => {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

range.addEventListener('input', (e) => {
    const val = +e.target.value;
    const label = e.target.nextElementSibling;

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
    const labelWidth = getComputedStyle(label).getPropertyValue('width');

    const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2)
    

    const max = +e.target.max
    const min = +e.target.min

    const left = val * (numRangeWidth / max) - numLabelWidth / 2 + scale(val, min, max, 10, -10);



    label.style.left = left + 'px'

    label.innerHTML = val;
});

