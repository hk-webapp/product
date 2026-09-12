self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/hostShop/product"
      }
    ],
    "beforeFiles": [
      {
        "source": "/hostShop/product//_next/:path+",
        "destination": "/hostShop/product/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()