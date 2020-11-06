#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/lru-cache/1

const _ = require('lodash');

function queryCache(cache, queries) {
    return _.chain(queries)
    .map(([action, key, value]) => {
        // console.log([action, key, value].join(' '));
        // console.log('cache', cache.cache);
        // console.log('queue', cache.queue);
        return cache[action](key, value)
    })
    .filter((value) => value !== undefined)
    .join(' ')
    .value()
}

class DoublyLinkedList {
    constructor(size) {
        this.size = size;
        this.length = 0;
        this.first = null;
        this.last = null;
    }

    push(value) {
        let removed = null;
        if (this.length === this.size) {
            removed = this.pop();
        }

        const prevFirst = this.first;

        this.first = {
            value,
            next: prevFirst,
            prev: null
        };

        if (prevFirst !== null) {
            prevFirst.prev = this.first;
        }

        if (this.last === null) {
            this.last = this.first;
        }

        this.length++;

        return removed;
    }

    pop() {
        if (this.last === null) {
            
            return null;
        }

        const value = this.last.value;

        this.last = this.last.prev;

        this.length--;
        
        return value;
    }

    remove(elem) {
        const next = elem.next;
        const prev = elem.prev;
        
        if (elem === this.first) {
            this.first = next;
        }

        if (elem === this.last) {
            this.last = prev;
        }

        if (next) {
            next.prev = prev;
        }

        if (prev) {
            prev.next = next;
        }

        this.length--;

        return elem.value;
    }

}

class LRU {
    constructor(cacheSize){
        this.cacheSize = cacheSize;
        this.cache = {};
        this.queue = new DoublyLinkedList(cacheSize);

    }
     get(key) {
         if (!this.cache[key]) {
             return -1;
         }
        const { value, pos }  = this.cache[key]; 
 
        this.queue.remove(pos);
        this.queue.push(key);
        this.cache[key].pos = this.queue.first;
        
        return value;
     }

     set(key, value) {
         // check if already in queue and remove from queue
         if (this.cache[key]) {
            const { pos } = this.cache[key];
             this.queue.remove(pos);
         }
         // add to top of queue
         const toDelete = this.queue.push(key);
         // clean up
         if (toDelete !== null) {
            delete this.cache[toDelete];
         }

         this.cache[key] = {
             value, 
             pos: this.queue.first
         };
     }

     get length() {
        return this.queue.length;
     }
}

if (require.main) {

    const cacheSize = parseInt(process.argv[2]);
    const queries = _.map(process.argv[3].split(','), (q) => q.split(' '));
    const lru = new LRU(cacheSize);
    console.log(queryCache(lru, queries));
}
