/* eslint-disable no-irregular-whitespace */
const config = {
  /**
   * You can use this tool http://heymind.github.io/tools/microsoft-graph-api-auth
   * to get following params: client_id, client_secret, refresh_token & redirect_uri.
   */
  refresh_token: "0.AX0AEqZW8rbs5ZQ9scj51G1pBPv20SzX36O6xzixwF4ThyZNNJ7JfMKSHKclGxHjtF-Wpi7jzEg1xL3sCOtR8VKpbpzHW3oTuRH6GrcDXsONMZB5els1KB7dxuSBN5QfgHq4ScDuXgkSxchFfeaR6KdFWoR83aHYfXqsvzdrmTeXr3t71kxZv5Gbc5fAignCyjo1dAFujrkkslHIc7M-1203ADNBHbL28M697DuDIdUm6s7Nk-h-l8TNZidxrKfVXxrzvENcs9P6gTqyvhCR_LXg7raScL-H_wFXyGwoXpZYpqocbLIiKzuCgHeKAvCP6qYLgeuixZ8_QkO0OHqv33JpwOx_PyFZ6LwKFrcUDYuqgd1L1PJlQOrEFsi0Jzouf-Gpp7JTqRkYkxIt2hHbUzmucHRp1NpE_SYVJ5ofo7Pf4647gre27b9SlBP25zgz9nT5mjO0JzzfF-b-k35ANyqe9ZrR80Cl9MT-71udW_SBaMwvr2HwbGUdzH8Pd6lDdrI5tU9q3Cu6zRUOGSqZqipAE4rm5LgIPHFjiPwCwakIB13BiX_C4qiJbZ4afj_OGDZ960bynikS4rjxJ6PDQp960gYdcUMUESS2-8zfeBZACFuX-QR4irZIYbk9gLyRhL4HN1oE41Uu9Q6fTAMjsqAnwhdS-P13lN0i07FIJIcxyzrc3NgTOT6ot7FCcKbABkeKEOF_ftdZ1fp10uvlzl20kPFKJ_sOUSBr5-jKCRchxcyuXaI1wAmOKEUsIdij3A5VqymD2FG2ldsSbVP2teiZRpUGY1WW6TH0SyzwZzCHM1bGkC9jKmOTRlCctTZvoWOuyleetqwySEqYnJulGVaPQ5n2GXbJqrWG8Bk4p-_Jwvl2qp-MScH4pNERJ0le0ujb5CsLeHf8C1_jYHlUSoPq70X_DWw6YMqOIJmhcy_jlY89rxyt4hxDChxW1sPiuReeNfzxPYGMScRm2PwRAm2dn4Sopq1DkYmzzwPyzK9JfQa39gBP1rCsxLQ6bw1BMARvKi-bz6k_GIikeTq_yliWnk",
  client_id: '0eb4befd-fa9e-4ff7-4ff7-1ba20d90a02a',
  client_secret: '-IKAj_R8K~I27-4m3i3kf32zT6DHOivi.',
  redirect_uri: 'https://heymind.github.io/tools/microsoft-graph-api-auth',

  /**
   * The base path for indexing, all files and subfolders are public by this tool. For example: `/Public`.
   */
  base: '/Public',

  /**
   * Feature: add OneDriveCN (21Vianet) support
   * Usage: simply change `useOneDriveCN` to true
   */
  useOneDriveCN: false,

  /**
   * Feature: Pagination when a folder has multiple(>${top}) files
   * - top: specify the page size limit of the result set, a big `top` value will slow down the fetching speed
   */
  pagination: {
    enable: true,
    top: 100 // default: 200, accepts a minimum value of 1 and a maximum value of 999 (inclusive)
  },

  /**
   * Feature Caching
   * Enable Cloudflare cache for path pattern listed below.
   * Cache rules:
   * - Entire File Cache  0 < file_size < entireFileCacheLimit
   * - Chunked Cache     entireFileCacheLimit  <= file_size < chunkedCacheLimit
   * - No Cache ( redirect to OneDrive Server )   others
   *
   * Difference between `Entire File Cache` and `Chunked Cache`
   *
   * `Entire File Cache` requires the entire file to be transferred to the Cloudflare server before
   *  the first byte sent to a client.
   *
   * `Chunked Cache` would stream the file content to the client while caching it.
   *  But there is no exact Content-Length in the response headers. ( Content-Length: chunked )
   *
   */
  cache: {
    enable: false,
    entireFileCacheLimit: 10000000, // 10MB
    chunkedCacheLimit: 100000000, // 100MB
    paths: ['/Images']
  },

  /**
   * Feature: Thumbnail
   * Show a thumbnail of image by ?thumbnail=small (small, medium, large)
   * More details: https://docs.microsoft.com/en-us/onedrive/developer/rest-api/api/driveitem_list_thumbnails?view=odsp-graph-online#size-options
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?thumbnail=mediumSquare
   * You can embed this link (url encoded) directly inside Markdown or HTML.
   */
  thumbnail: true,

  /**
   * Small File Upload (<= 4MB)
   * POST https://<base_url>/<directory_path>/?upload=<filename>&key=<secret_key>
   */
  upload: {
    enable: false,
    key: 'your_secret_key_here'
  },

  /**
   * Feature: Proxy Download
   * Use Cloudflare as a relay to speed up download. (Especially in Mainland China)
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?raw=true&proxied
   * You can also embed this link (url encoded) directly inside Markdown or HTML.
   */
  proxyDownload: true
}

export default config
