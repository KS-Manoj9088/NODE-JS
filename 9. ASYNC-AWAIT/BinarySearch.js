let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 9;

/*

async function BinarySearch(arr, target) {
    return new Promise((resolve, reject) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                resolve(mid);
                return;
            } else if (target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        reject("Element Not Found");
    });
}

// ✅ Using an IIFE to call await correctly
(async () => {
    try {
        let result = await BinarySearch(arr, target);
        console.log("Element found at index:", result);
    } catch (err) {
        console.log(err);
    }
})();
*/



async function BinarySearch(arr, target) {
    try {
        let result = await new Promise((resolve, reject) => {
            let left = 0;
            let right = arr.length - 1;

            while (left <= right) {
                let mid = Math.floor((left + right) / 2);

                if (arr[mid] === target) {
                    resolve(mid);
                    return;
                } else if (target < arr[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            reject("Element Not Found");
        });

        return result; // ✅ Return the resolved value
    } catch (err) {
        return err; // ✅ Return the error message
    }
}

/*
// ✅ Calling the function properly
(async () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let target = 9;

    let result = await BinarySearch(arr, target);
    console.log(result); // Output: Element index if found, otherwise "Element Not Found"
})();
*/

async function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let target = 20;

    let result = await BinarySearch(arr, target);
    console.log(result);
}

main()
