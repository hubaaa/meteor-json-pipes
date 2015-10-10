# hubaaa:json-pipes

Pipe json data trough filters, transformers and processors.

# API

`pipe = new JsonPipe(options == {})`

## options

### filter(context, doc)

An optional filtering function that returns:
- false if doc should be dropped
- true if doc should be passed along the pipe
- undefined if it doesn't care about this specific doc

### transform(context, doc)

An optional transform function that returns the transformed document.

### process(context, doc, transformedDoc)

An optional process function that receives the "end product".

### outputCollection

An optional collection where the transformed document will be saved.

Can be an existing Mongo.Collection or the name of the Mongo.Collection to create.

# Coming Soon

1. Support filterCollection (as the basis for data caching)
2. Support multiple filters, transformers and processors
3. Support filters that are mongodb filter expressions to be applied on saved doc in filterCollection.
4. Chain pipes
