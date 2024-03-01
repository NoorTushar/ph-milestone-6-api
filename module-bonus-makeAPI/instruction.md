1. Let us go to the link first - https://www.rokomari.com/book/author/40266/jhankar-mahbub
2. delete all the sections which are not required
3. lets grab the card container/ book item, `book-list-wrapper`
4. create an array of all books using querySelectorAll
5. now run a loop to this array list of books and get img, headers like this
6. example, `const bookTitle = book.querySelector('.book-title').textContent`
7. example, `const bookAuthor = book.querySelector('.book-author').textContent`
8. example, `const bookPrice = book.querySelector('.book-price').textContent`
9. example, `const bookImg = book.querySelector('.book-img img').src`

10.   Now how to store inside a JSON variable?

11.   we first of create a booksJSON empty array.
12.   push each data as a object into the booksJSON array

13.   That's it!! Enjoy!

```js
let booksJSON = [];

allBooks.forEach((book) => {
   const bookImg = book.querySelector(".book-img img").src;
   const bookTitle = book.querySelector(".book-title").innerText;
   const bookPrice = book.querySelector(".book-price").innerText;
   let ratingCountElement = book.querySelector(".rating-section span");
   let ratingCount = ratingCountElement
      ? ratingCountElement.innerText
      : "No Rating Yet";

   booksJSON.push({ bookImg, bookTitle, bookPrice, ratingCount });
});
```

Output:

```js
[
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/00ea58560_112222.jpg",
      bookTitle: "হাবলুদের জন্য প্রোগ্রামিং",
      bookPrice: "TK. 300 TK. 225",
      ratingCount: "(538)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f0836d0b7_158227.jpg",
      bookTitle: "প্রোগ্রামিংয়ের চৌদ্দগোষ্ঠী",
      bookPrice: "TK. 420 TK. 315",
      ratingCount: "(213)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Growing_Through_Struggle-Jhankar_Mahbub-854bc-378857.jpg",
      bookTitle: "গ্রোয়িং থ্রু স্ট্রাগল",
      bookPrice: "TK. 400 TK. 300",
      ratingCount: "(8)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/34eff29de_155900.jpg",
      bookTitle: "রিচার্জ ইয়োর ডাউন ব্যাটারি",
      bookPrice: "TK. 300 TK. 225",
      ratingCount: "(454)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/95512cdf1cf4_128993.jpg",
      bookTitle: "প্রোগ্রামিংয়ের বলদ টু বস",
      bookPrice: "TK. 300 TK. 225",
      ratingCount: "(267)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/5009d71f2_177431.jpg",
      bookTitle: "প্যারাময় লাইফের প্যারাসিটামল",
      bookPrice: "TK. 320 TK. 240",
      ratingCount: "(410)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/38e267230_212414.jpg",
      bookTitle: "চেষ্টার জিমনেসিয়াম ফিউচারের ক্যালসিয়াম",
      bookPrice: "TK. 240 TK. 180",
      ratingCount: "(155)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f840e17d7_140277.jpg",
      bookTitle: "হাবলুদের প্রোগ্রামিং শেখা",
      bookPrice: "TK. 1,020 TK. 759",
      ratingCount: "(125)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/337275098_160901.jpg",
      bookTitle: "ঝংকার মাহবুবের বইসমূহ",
      bookPrice: "TK. 1,320 TK. 990",
      ratingCount: "(16)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/4dd6c8196_162156.jpg",
      bookTitle: "আত্ম উন্নয়ন বই স্টুডেন্ট কালেকশন",
      bookPrice: "TK. 600 TK. 450",
      ratingCount: "(13)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/0a78216e9_162163.jpg",
      bookTitle: "আত্মউন্নয়ন রকমারি বেস্টসেলার কালেকশন",
      bookPrice: "TK. 2,624 TK. 1,965",
      ratingCount: "(5)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/c8318d41e_162160.jpg",
      bookTitle: "বইমেলা ২০১৮ রকমারি বেস্টসেলার কালেকশন",
      bookPrice: "TK. 1,520 TK. 1,125",
      ratingCount: "(13)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/7604f29b8_162161.jpg",
      bookTitle: "বইমেলা ২০১৭ রকমারি বেস্টসেলার কালেকশন",
      bookPrice: "TK. 1,735 TK. 1,355",
      ratingCount: "(14)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Rechargeable_Paramoy_Gymnasium_Collectio-Jhankar_Mahbub-ee8f2-217036.jpg",
      bookTitle:
         "রিচার্জেবল প্যারাময় জিমনেসিয়াম কালেকশন (ঝংকার মাহবুবের ৩টি মোটিভেশনাল বই)",
      bookPrice: "TK. 860 TK. 645",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f385be9cd_188012.jpg",
      bookTitle:
         "ভার্সিটি পড়ুয়া শিক্ষার্থীদের লেখাপড়া, আত্মউন্নয়ন, দিকনির্দেশনার রকমারি কালেকশন",
      bookPrice: "TK. 800 TK. 600",
      ratingCount: "(7)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/1e5b270d3_201406.jpg",
      bookTitle: "ছাত্রজীবনের সমস্যা সমাধানে ঝংকার মাহবুব এর সেরা ২টি বই",
      bookPrice: "TK. 620 TK. 460",
      ratingCount: "(1)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/8aaef55ff_189716.jpg",
      bookTitle:
         "২০১৮ সালে রকমারি বেস্ট সেলার আত্মউন্নয়নমূলক ৫টি বইয়ের কালেকশন",
      bookPrice: "TK. 1,594 TK. 1,195",
      ratingCount: "(1)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/6f022ef11_179123.jpg",
      bookTitle: "বইমেলা ঊনিশের স্টুডেন্ট মাস্টরিড ৩টি বই",
      bookPrice: "TK. 1,120 TK. 840",
      ratingCount: "(9)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/fd187bc94_203070.jpg",
      bookTitle: "ঝংকারের আত্ম-উন্নয়ন সমগ্র",
      bookPrice: "TK. 620 TK. 460",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/College_Poruader_Jonno_Programming_Sakhe-Jhankar_Mahbub-9edb2-254265.png",
      bookTitle: "কলেজ পড়ুয়াদের জন্য প্রোগ্রামিং শেখার বই",
      bookPrice: "TK. 1,320 TK. 990",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/961e8cc28_164682.jpg",
      bookTitle: "বইমেলা ২০১৬ রকমারি বেস্টসেলার কালেকশন",
      bookPrice: "TK. 710 TK. 533",
      ratingCount: "(3)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/computer_internet_freelancing_and_outsou-Tamim_Shahriar_Subeen-2458a-189726.jpg",
      bookTitle:
         "কম্পিউটার, ইন্টারনেট, ফ্রিল্যান্সিং ও আউটসোর্সিং সংক্রান্ত ৫টি বেস্টসেলার বইয়ের কালেকশন",
      bookPrice: "TK. 1,385 TK. 1,035",
      ratingCount: "(2)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/954a3f67f_189916.jpg",
      bookTitle:
         "২০১৬ সালের রকমারি বেস্ট সেলার কম্পিউটার, ইন্টারনেট, ফ্রিল্যান্সিং ও আউটসোর্সিং ৪টি বইয়ের কালেকশন",
      bookPrice: "TK. 1,170 TK. 875",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/17e4f54de_203102.jpg",
      bookTitle: "পাইথন, সি ও হাবলু",
      bookPrice: "TK. 1,740 TK. 1,300",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/ea67c6b5f_203100.jpg",
      bookTitle: "প্রোগ্রামিং সমগ্র",
      bookPrice: "TK. 1,080 TK. 810",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/ffc9e3488_203101.jpg",
      bookTitle: "হাবলুর প্রোগ্রামিং ও পাইথন",
      bookPrice: "TK. 1,380 TK. 1,030",
      ratingCount: "(1)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/d62199487_203069.jpg",
      bookTitle: "ঝংকার সমগ্র",
      bookPrice: "TK. 1,340 TK. 1,000",
      ratingCount: "(1)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/804faeb56_203071.jpg",
      bookTitle: "ঝংকারের প্রোগ্রামিং সমগ্র",
      bookPrice: "TK. 1,020 TK. 760",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f6723c6d4_203087.jpg",
      bookTitle: "প্যারাময় লাইফ, ভাল্লাগে না!",
      bookPrice: "TK. 620 TK. 498",
      ratingCount: "(4)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/eb3cd8a83_203088.jpg",
      bookTitle: "প্যারাময় লাইফ, লোকে কী বলবে?",
      bookPrice: "TK. 575 TK. 459",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/126b5d7b6_203090.jpg",
      bookTitle: "লোকে, ভাল্লাগে না, প্যারাময়",
      bookPrice: "TK. 875 TK. 717",
      ratingCount: "(2)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/99096b19d_203085.jpg",
      bookTitle: "ভাল্লাগে না, ব্যাটারি ডাউন!",
      bookPrice: "TK. 600 TK. 483",
      ratingCount: "(3)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/3d8dbe7da_203104.jpg",
      bookTitle: "প্রোগ্রামিং ও মেশিন লার্নিং",
      bookPrice: "TK. 2,600 TK. 2,202",
      ratingCount: "(1)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/ccd2f25a5_203103.jpg",
      bookTitle: "শূন্য থেকে প্রোগ্রামিং",
      bookPrice: "TK. 3,260 TK. 2,767",
      ratingCount: "(2)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/09f0f56a9_208550.jpg",
      bookTitle: "২০২০ সালের বেস্টসেলার ছাত্র উন্নয়ন বিষয়ক ৫টি বই",
      bookPrice: "TK. 1,520 TK. 1,122",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/6ef7144b8_203086.jpg",
      bookTitle: "ব্যাটারি ডাউন, লোকে কী বলবে?",
      bookPrice: "TK. 555 TK. 444",
      ratingCount: "(2)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/eb362b72f_203091.jpg",
      bookTitle: "ব্যাটারি, লোকে, প্যারাময়",
      bookPrice: "TK. 875 TK. 684",
      ratingCount: "(1)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/7d9230ee4_203092.jpg",
      bookTitle: "ব্যাটারি, ভাল্লাগে না, প্যারাময়",
      bookPrice: "TK. 920 TK. 723",
      ratingCount: "(1)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/16a203d67_203089.jpg",
      bookTitle: "লোকে কী বলবে, ব্যাটারি, ভাল্লাগে না",
      bookPrice: "TK. 855 TK. 702",
      ratingCount: "No Rating Yet",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/6ceb8f565_203095.jpg",
      bookTitle: "আত্ম-উন্নয়ন সমগ্র",
      bookPrice: "TK. 1,480 TK. 1,143",
      ratingCount: "(3)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/c9f691e13_203094.jpg",
      bookTitle: "মন সমগ্র",
      bookPrice: "TK. 1,160 TK. 903",
      ratingCount: "(1)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e248c4f18_203093.jpg",
      bookTitle: "ব্যাটারি, ভাল্লাগে না, মন",
      bookPrice: "TK. 860 TK. 678",
      ratingCount: "(1)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/491e28155_174440.jpg",
      bookTitle: "প্রোগ্রামিং গাইডলাইনঃ যে বইগুলো দিয়ে শুরু করতে পারেন",
      bookPrice: "TK. 1,320 TK. 1,065",
      ratingCount: "(8)",
   },
   {
      bookImg:
         "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Buityander_Boi-Munir_Hasan-13b2f-231749.jpg",
      bookTitle: "বুয়েটিয়ানদের বই রকমারি কালেকশন",
      bookPrice: "TK. 1,460 TK. 1,255",
      ratingCount: "(1)",
   },
];
```
