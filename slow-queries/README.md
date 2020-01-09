### Problem Description

You have an application that needs to look up information about items using their item UUID, often in large batches.

Unfortunately, the only API available with this information is a notoriously slow one that takes only one item at a time, which means you'll have to perform one query per item. Additionally, the API is limited to 5 simultaneous requests. Any additional requests will be rejected with HTTP 429 (too many requests).

The same item may be requested multiple times over the course of the application's lifetime (though not necessarily in the same batch). Thankfully, this API will always return the same result for a given UUID.

The API requires an Authorization header containing the requested UUID encoded in Base64 for each request.

Write a client utility for your program to use that will retrieve the information for all given item UUIDs as quickly as possible without triggering the API's simultaneous request limit, and without performing unnecessary queries for UUIDs that have already been seen.

    API Usage:

    GET https://challenges.qluv.io/items/:uuid

    Required headers:
    Authorization: Base64(:uuid)

    Example:
    curl https://challenges.qluv.io/items/a6b54386-bdca-4ee1-bc65-ff6436bac571 -H "Authorization: YTZiNTQzODYtYmRjYS00ZWUxLWJjNjUtZmY2NDM2YmFjNTcx"

`example-inputs/uuids.txt` is the file provided to the candidate.

