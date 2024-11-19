// WebAPI_2.js

const maxNum = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const minNum = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const medNum = (arr) => {
  const sortedArray = arr.slice().sort((a, b) => a - b);
  const length = sortedArray.length;
  if (length % 2 === 1) {
    return sortedArray[Math.floor(length / 2)];
  } else {
    const mid1 = sortedArray[length / 2 - 1];
    const mid2 = sortedArray[length / 2];
    return (mid1 + mid2) / 2;
  }
};

function findMode(arr) {
  const frequency = {};
  let maxFreq = 0;
  let modes = [];

  arr.forEach((item) => {
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > maxFreq) {
      maxFreq = frequency[item];
    }
  });

  for (let key in frequency) {
    if (frequency[key] === maxFreq) {
      modes.push(Number(key));
    }
  }

  return modes;
}

function calculateUnbiasedVariance(arr) {
  const n = arr.length;
  const mean = arr.reduce((sum, value) => sum + value, 0) / n;
  const variance =
    arr.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / (n - 1);
  return variance;
}

function countOccurrences(arr) {
  const frequency = {};

  arr.forEach((item) => {
    frequency[item] = (frequency[item] || 0) + 1;
  });

  const sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

  const sortedFrequencyObject = {};
  sortedFrequency.forEach(([key, value]) => {
    sortedFrequencyObject[key] = value;
  });

  return sortedFrequencyObject;
}

function getInputData() {
  const inputText = document.getElementById("inputData").value;
  const inputArray = inputText
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => !isNaN(item));
  return inputArray;
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("kadai2-1").addEventListener(
      "click",
      function () {
        let result = document.getElementById("result2-1");
        const inputData = getInputData();
        if (inputData.length === 0) {
          result.textContent = "データを入力してください";
          return;
        }
        const maxValue = maxNum(inputData);
        result.textContent = `最大値: ${maxValue}`;
      },
      false
    );

    document.getElementById("kadai2-2").addEventListener(
      "click",
      function () {
        let result = document.getElementById("result2-2");
        result.innerHTML = "";
        const inputData = getInputData();
        if (inputData.length === 0) {
          result.textContent = "データを入力してください";
          return;
        }
        let ul = document.createElement("ul");
        let maxValue = maxNum(inputData);
        let minValue = minNum(inputData);
        let medianValue = medNum(inputData);
        let modeValue = findMode(inputData);
        let varianceValue = calculateUnbiasedVariance(inputData).toFixed(2);
        let liMax = document.createElement("li");
        liMax.textContent = "最大値: " + maxValue;
        ul.appendChild(liMax);
        let liMin = document.createElement("li");
        liMin.textContent = "最小値: " + minValue;
        ul.appendChild(liMin);
        let liMedian = document.createElement("li");
        liMedian.textContent = "中央値: " + medianValue;
        ul.appendChild(liMedian);
        let liMode = document.createElement("li");
        liMode.textContent = "最頻値: " + modeValue.join(", ");
        ul.appendChild(liMode);
        let liVariance = document.createElement("li");
        liVariance.textContent = "分散: " + varianceValue;
        ul.appendChild(liVariance);
        result.appendChild(ul);
      },
      false
    );

    document.getElementById("kadai2-3").addEventListener(
      "click",
      function () {
        let result = document.getElementById("result2-3");
        result.innerHTML = "";
        const inputData = getInputData();
        if (inputData.length === 0) {
          result.textContent = "データを入力してください";
          return;
        }
        let ul = document.createElement("ul");

        const counts = {};
        inputData.forEach((item) => {
          counts[item] = (counts[item] || 0) + 1;
        });

        const sortedCounts = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .map(([value, count]) => ({ value: Number(value), count }));

        sortedCounts.forEach((item) => {
          let li = document.createElement("li");
          li.textContent = `${item.value} が ${item.count} 回出現`;
          ul.appendChild(li);
        });

        result.appendChild(ul);
      },
      false
    );
  },
  false
);
