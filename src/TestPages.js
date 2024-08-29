useEffect(() => {
    handleEvent()
  }, [])

  function handleEvent(e) {
    debugger
    console.log(e)
  }

  // const [data, setData] = useState([]);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  function downPDF() {
    var doc = new jsPDF();
    doc.text("Hello world!", 20, 20);
    doc.text("This is client-side Javascript, pumping out a PDF.", 20, 30);
    doc.addPage("a6", "l");
    doc.text("Do you like that?", 20, 20);
    var pageCount = doc.internal.getNumberOfPages(); //Total Page Number
    for (var i = 0; i < pageCount; i++) {
      doc.setPage(i);
      let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber; //Current Page
      doc.setFontSize(12);
      doc.text('page: ' + pageCurrent, 50, 50);
    }
    doc.save("down.pdf")
  }

  const generatePDF = () => {
    debugger
    var doc = new jsPDF('p', 'pt', 'letter');
    doc.page = 1
    doc.autoTable({
      startY: 60,
      styles: { marginTop: 70, fontSize: 12 },
      bodyStyles: { minCellHeight: 5 },
      head: [
        [
          {
            content: 'Account Details',
            colSpan: 5,
            styles: { halign: 'left', margin: 20, fontSize: 14 },
          },
        ],
      ],

      body: [
        ['Bank ', "sfsf"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
        ['Aadhar/ VID', "sfs"],
      ],
    })
    debugger
    var pageCount = doc.internal.getNumberOfPages(); {/*Total Page Number*/ }
    for (var i = 0; i < pageCount; i++) {
      doc.setPage(i);
      let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber; //Current Page
      doc.setFontSize(12);
      doc.text('page: ' + pageCurrent, 100, 150);
    }
    doc.save('Balance Enquiry.pdf')
  }

  function convert(file) {
    var fr = new FileReader();
    var pdff;
    fr.onload = function () {
      pdff.pdfToText(fr.result, null, (text) => { document.getElementById('result').innerText += text; });
    }
    fr.readAsDataURL(document.getElementById('pdffile').file)
    console.log(fr, 'frrrrrrr')
  }


  // function Pdf2TextClass() {
  //     var self = this;
  //     this.complete = 0;

  //     this.pdfToText = function (data, callbackPageDone, callbackAllDone) {
  //         console.assert(data instanceof ArrayBuffer || typeof data == 'string');
  //         var loadingTask = pdfjsLib.getDocument(data);
  //         loadingTask.promise.then(function (pdf) {


  //             var total = pdf._pdfInfo.numPages;
  //             //callbackPageDone( 0, total );        
  //             var layers = {};
  //             for ( var i = 1; i <= total; i++) {
  //                 pdf.getPage(i).then(function (page) {
  //                     var n = page.pageNumber;
  //                     page.getTextContent().then(function (textContent) {

  //                         //console.log(textContent.items[0]);0
  //                         if (null != textContent.items) {
  //                             var page_text = "";
  //                             var last_block = null;
  //                             for (var k = 0; k < textContent.items.length; k++) {
  //                                 var block = textContent.items[k];
  //                                 if (last_block != null && last_block.str[last_block.str.length - 1] != ' ') {
  //                                     if (block.x < last_block.x)
  //                                         page_text += "\r\n";
  //                                     else if (last_block.y != block.y && (last_block.str.match(/^(\s?[a-zA-Z])$|^(.+\s[a-zA-Z])$/) == null))
  //                                         page_text += ' ';
  //                                 }
  //                                 page_text += block.str;
  //                                 last_block = block;
  //                             }

  //                             textContent != null && console.log("page " + n + " finished."); //" content: \n" + page_text);
  //                             layers[n] = page_text + "\n\n";
  //                         }
  //                         ++self.complete;
  //                         //callbackPageDone( self.complete, total );
  //                         if (self.complete == total) {
  //                             window.setTimeout(function () {
  //                                 var full_text = "";
  //                                 var num_pages = Object.keys(layers).length;
  //                                 for (var j = 1; j <= num_pages; j++)
  //                                     full_text += layers[j];
  //                                 callbackAllDone(full_text);
  //                             }, 1000);
  //                         }
  //                     }); // end  of page.getTextContent().then
  //                 }); // end of page.then
  //             } // of for
  //         });
  //     }; // end of pdfToText()
  // }; // end of class


  const downPDF1 = (file) => {
    debugger
    const reader = new FileReader();
    // reader.readAsDataURL(file);
    reader.readAsText(file)
    reader.addEventListener('load', (e) => {
      debugger
      const data = e.target.result;
    })
  }


  const htmlFileUrl = `${process.env.PUBLIC_URL}/HtmlTest/test2.pdf`;
  console.log("htmlFile", htmlFileUrl);


  // Two Pointer Approach  
  // In Array adding of two number should hit the target 6                              

  // function findSumPair(array, X) {

  //   debugger
  //   let left = 0;
  //   let right = array.length - 1;
  //   while (left < right) {
  //     debugger
  //     const sum = array[left] + array[right];
  //     if (sum === X) {
  //       console.log(`Pair found at indices ${left} and ${right}`);
  //       return [left, right];
  //     } else if (sum < X) {

  //       left++;
  //     } else {
  //       right--;
  //     }
  //   }
  //   console.log('Pair not found');
  //   return null;
  // }
  // const array = [1, 3, 5, 7, 9];
  // const X = 12;
  // findSumPair(array, X);

  // "Given an integer array nums,"
  // "return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0."
  // "Notice that the solution set must not contain duplicate triplets."

  // function threeSum(nums) {
  //   const results = []

  //   // obviously irrelevant if we don't have at least 3 numbers to play with!
  //   if (nums.length < 3) return results

  //   // having the numbers in ascending order will make this problem much easier.
  //   // also, knowing the overall problem  will take at least O(N^2) time, we can
  //   // afford the O(NlogN) sort operation
  //   nums = nums.sort((a, b) => a - b)

  //   // if the question asks us for a custom target, we can control it here
  //   let target = 0

  //   for (let i = 0; i < nums.length - 2; i++) {
  //     // `i` represents the "left" most number in our sorted set.
  //     // once this number hits 0, there's no need to go further since
  //     // positive numbers cannot sum to a negative number
  //     if (nums[i] > target) break

  //     // we don't want repeats, so skip numbers we've already seen
  //     if (i > 0 && nums[i] === nums[i - 1]) continue

  //     // `j` represents the "middle" element between `i` and `k`.
  //     // we will increment this up through the array while `i` and `k`
  //     // are anchored to their positions. we will decrement `k` for
  //     // for each pass through the array, and finally increment `i`
  //     // once `j` and `k` meet.
  //     let j = i + 1

  //     // `k` represents the "right" most element
  //     let k = nums.length - 1

  //     // to summarize our setup, we have `i` that starts at the beginning,
  //     // `k` that starts at the end, and `j` that races in between the two.
  //     //
  //     // note that `i` is controlled by our outer for-loop and will move the slowest.
  //     // in the meantime, `j` and `k` will take turns inching towards each other depending
  //     // on some logic we'll set up below. once they collide, `i` will be incremented up
  //     // and we'll repeat the process.

  //     while (j < k) {
  //       let sum = nums[i] + nums[j] + nums[k]

  //       // if we find the target sum, increment `j` and decrement `k` for
  //       // other potential combos where `i` is the anchor
  //       if (sum === target) {
  //         // store the valid threesum
  //         results.push([nums[i], nums[j], nums[k]])

  //         // this is important! we need to continue to increment `j` and decrement `k`
  //         // as long as those values are duplicated. in other words, we wanna skip values
  //         // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
  //         // [[-2,0,2], [-2,0,2]].
  //         //
  //         // (i'm not a fan of this part because we're doing a while loop as we're
  //         // already inside of another while loop...)
  //         // while (nums[j] === nums[j + 1]) j++
  //         // while (nums[k] === nums[k - 1]) k--

  //         // finally, we need to actually move `j` forward and `k` backward to the
  //         // next unique elements. the previous while loops will not handle this.
  //         j++
  //         k--

  //         // if the sum is too small, increment `j` to get closer to the target
  //       } else if (sum < target) {
  //         j++

  //         // if the sum is too large, decrement `k` to get closer to the target
  //       } else { // (sum > target)
  //         k--
  //       }
  //     }
  //   }

  //   return results
  // };

  // const L = {
  //   '2': "abc", '3': "def", '4': "ghi", '5': "jkl",
  //   '6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz"
  // }

  // var letterCombinations = function (D) {
  //   debugger
  //   let len = D.length, ans = []
  //   if (!len) return []
  //   const dfs = (pos, str) => {
  //     debugger
  //     if (pos === len) ans.push(str)
  //     else {
  //       let letters = L[D[pos]]
  //       for (let i = 0; i < letters.length; i++)
  //         dfs(pos + 1, str + letters[i])
  //     }
  //   }
  //   dfs(0, "")
  //   return ans
  // };



  // var longestPalindrome = function (s) {
  //   let res = "";
  //   let max = 0;
  //   debugger
  //   for (let i = 0; i < s.length; i++) {
  //     debugger
  //     for (let j = 0; j <= 1; j++) {
  //       debugger
  //       let l = i;
  //       let r = i + j;

  //       while (l >= 0 && r < s.length && s[l] === s[r]) {
  //         let len = r - l + 1;
  //         if (len > max) {
  //           res = s.substring(l, r + 1);
  //           max = len;
  //         }
  //         l--;
  //         r++;
  //       }
  //     }
  //   }
  //   return res;
  // };

  function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return []
    } else {
      let countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
  };
  console.log(rangeOfNumbers(4, 8));

  const myConcat = (...n) => console.log(n);;

  console.log(myConcat("vishal", [4, 5, 6]))

  // function countup(n) {
  //   if (n < 1) {
  //     return [];
  //   } else {
  //     const countArray = countup(n - 1);
  //     countArray.push(n);
  //     return countArray;
  //   }
  // }
  // console.log(countup(5));

  // useEffect(() => {
  //   debugger
  //   console.log("htmlFile", htmlFileUrl);

  //   fetch(htmlFileUrl)
  //     .then((response) => response.text())
  //     .then((data) => {
  //       debugger;
  //       console.log("resp", data)

  //     })
  //     .catch((error) => {
  //       console.error('Error fetching HTML content:', error);
  //     });
  // }, []);

  // const htmlFileUrl = `${process.env.PUBLIC_URL}/HtmlTest/test.html`;
  // console.log("html", htmlFileUrl);
  // function(e) {
  //   document.getElementById("test")
  // }