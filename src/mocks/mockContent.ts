import mockUser from "./mockUser"

const otherMaterials = {
  id: "8",
  content:
    '{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]},{"object":"inline","type":"link","data":{"href":"/stockcenter/information/additional-materials"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Additional DSC Materials","marks":[{"object":"mark","type":"bold","data":{}}]}]}]},{"object":"text","leaves":[{"object":"leaf","text":"","marks":[{"object":"mark","type":"bold","data":{}}]}]}]},{"object":"block","type":"heading-five","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"18 antibodies","marks":[]}]}]},{"object":"block","type":"heading-five","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Genomic library pools","marks":[]}]}]},{"object":"block","type":"heading-five","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"GWDI pooled libraries","marks":[]}]}]}]}}',
  name: "other-materials",
  slug: "dsc-other-materials",
  updated_at: "2020-10-07T22:22:34.475Z",
  updated_by: mockUser,
  __typename: "Content",
}

export { otherMaterials }
