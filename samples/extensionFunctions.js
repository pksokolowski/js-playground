export default function extensionFunctions() {
    String.prototype.reverse = function () {
        let arr = Array.from(this);
        for (let i = 0; i < arr.length / 2; i++) {
            const rememberedValue = arr[i];
            const mirroredI = arr.length - 1 - i;
            arr[i] = arr[mirroredI];
            arr[mirroredI] = rememberedValue;
        }
        return arr.join('');
    }

    const input = 'abcde';
    console.log(`reverse of ${input} is ${input.reverse()}`);
};