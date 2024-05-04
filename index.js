function HashMap() {
  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % 16;
  }

  function set(key, value) {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      buckets[index] = { key, value };
    }
    return buckets[index];
  }

  function get(key) {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else if (buckets[index] && buckets[index].key == key) {
      return buckets[index].value;
    }
    return null;
  }

  function has(key) {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else if (buckets[index] && buckets[index].key == key) {
      return true;
    }
    return false;
  }

  function remove(key) {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else if (buckets[index].key == key) {
      buckets.splice(index, index);
      return true;
    }
    return false;
  }

  function length() {
    let length = 0;
    buckets.forEach((element) => {
      if (element.key && element.value) {
        length++;
      }
    });
    return length;
  }

  function clear() {
    buckets.splice(0, buckets.length);
  }

  function keys() {
    let keyArray = [];
    buckets.forEach((element) => {
      if (element.key) {
        keyArray.push(element.key);
      }
    });
    return keyArray;
  }

  function values() {
    let valueArray = [];
    buckets.forEach((element) => {
      if (element.value) {
        valueArray.push(element.value);
      }
    });
    return valueArray;
  }

  function entries() {
    let entriesArray = [];
    buckets.forEach((element) => {
      if (element.key && element.value) {
        entriesArray.push([element.key, element.value]);
      }
    });
    return entriesArray;
  }
}

buckets = [];
buckets.length = 16;
let test = HashMap();
console.log(test.hash("black"));
console.log(test.set("black", 98));
console.log(test.get("black"));
console.log(test.has("black"));
