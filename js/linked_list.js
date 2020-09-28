
const LinkedList = (() => {

  function ListNode(val = 0, next = null) {
    return { val, next };
  }

  const detectPropertyNames = constr => {
    const valueSym = Symbol('value');
    const subNode = constr(valueSym);
    const node = constr(valueSym, subNode);
    const entries = Object.entries(node);
    const value = entries.filter(([_, val]) => val === valueSym)[0][0];
    const next = entries.filter(([_, val]) => val === subNode)[0][0];
    return { value, next };
  };

  return function(constr = ListNode) {
    const props = detectPropertyNames(constr);

    const getValue = node => node[props.value];
    const getNext = node => node[props.next];
    const setValue = (node, value) => node[props.value] = value;
    const setNext = (node, next) => node[props.next] = next;

    const array2list = arr => {
      return arr.reverse().reduce((acc, el) => {
        return constr(el, acc);
      }, null);
    };

    const list2array = head => {
      if (head === null) return [];
      const res = [];
      while (head) {
        res.push(getValue(head));
        head = getNext(head);
      }
      return res;
    };

    const removeItems = (head, cond) => {
      const parents = new WeakMap();
      const remove = head => {
        if (head === null) return null;
        if (getNext(head)) parents.set(getNext(head), head);
        if (cond(getValue(head), head)) {
          const next = remove(getNext(head));
          if (parents.has(head)) setNext(parents.get(head), next);
          return next;
        }
        const next = remove(getNext(head));
        return head;
      };
      return remove(head);
    };

    const removeItem = (head, cond) => {
      const parents = new WeakMap();
      const remove = head => {
        if (head === null) return null;
        if (getNext(head)) parents.set(getNext(head), head);
        if (cond(getValue(head), head)) {
          const next = getNext(head);
          if (parents.has(head)) setNext(parents.get(head), next);
          return next;
        }
        const next = remove(getNext(head));
        return head;
      };
      return remove(head);
    };

    return {
      Node: constr,
      getValue,
      getNext,
      setValue,
      setNext,
      array2list,
      list2array,
      removeItems,
      removeItem,
    };
  };
})();

const ll = LinkedList();

const list = ll.array2list([1,2,3,4,5,6,7]);
console.log(list);
console.log(ll.list2array(list));
console.log(ll.list2array(ll.removeItems(list, val => val < 4)));
