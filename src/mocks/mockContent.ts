import mockUser from "./mockUser"

const otherMaterials = {
  contentBySlug: {
    id: "8",
    content:
      '{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]},{"object":"inline","type":"link","data":{"href":"/stockcenter/information/additional-materials"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Additional DSC Materials","marks":[{"object":"mark","type":"bold","data":{}}]}]}]},{"object":"text","leaves":[{"object":"leaf","text":"","marks":[{"object":"mark","type":"bold","data":{}}]}]}]},{"object":"block","type":"heading-five","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"18 antibodies","marks":[]}]}]},{"object":"block","type":"heading-five","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Genomic library pools","marks":[]}]}]},{"object":"block","type":"heading-five","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"GWDI pooled libraries","marks":[]}]}]}]}}',
    name: "other-materials",
    slug: "dsc-other-materials",
    updated_at: "2020-10-07T22:22:34.475Z",
    updated_by: mockUser,
    __typename: "Content",
  },
}

const intro = {
  contentBySlug: {
    id: "3",
    content:
      '{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"The ","marks":[]},{"object":"leaf","text":"Dicty Stock Center","marks":[{"object":"mark","type":"bold","data":{}}]},{"object":"leaf","text":" is a rapidly growing central repository for ","marks":[]},{"object":"leaf","text":"Dictyostelium discoideum","marks":[{"object":"mark","type":"italic","data":{}}]},{"object":"leaf","text":" strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies.  The DSC opened at Columbia University in New York City in the fall of 2002. In 2009 the DSC moved to its current location at Northwestern University in Chicago, IL, USA. The DSC is supported by NIH/NIGMS. Since 2015, DSC materials incur a small fee.","marks":[]}]}]},{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"PLEASE DO NOT ORDER FROM THIS TEST SITE. THIS IS FOR INTERNAL TESTING ONLY. THANKS!","marks":[{"object":"mark","type":"font-color","data":{"color":"#d0021b"}},{"object":"mark","type":"bold","data":{}}]}]}]}]}}',
    name: "intro",
    slug: "dsc-intro",
    updated_at: "2020-11-13T01:19:02.607Z",
    updated_by: {
      id: "1070",
      email: "pfey@northwestern.edu",
      first_name: "Petra",
      last_name: "Fey",
      roles: [
        {
          role: "curator",
          permissions: [
            {
              permission: "write",
              resource: "dictybase",
              __typename: "Permission",
            },
          ],
          __typename: "Role",
        },
      ],
      __typename: "User",
    },
    __typename: "Content",
  },
}

const about = {
  contentBySlug: {
    id: "1",
    content:
      '{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Strains are stored frozen in liquid nitrogen as axenic cultures, cells grown on bacterial lawn, or spores recovered from development on bacterial lawn. Storage is in three separate identical tanks, one of which is located in a different building. Plasmids are stored frozen at -80°C in duplicate freezers as transformed bacteria and often as DNA, stored at -20°C. GWD strains as received in 96 well plates are stored at -80°C. Once recovered they are stored in the three liquid nitrogen tanks.\\n","marks":[]}]}]},{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"The collection is being built by submission of  published strains and plasmids. We encourage and also periodically remind investigators to send new mutants, natural isolates, and plasmids, once they have been published. We do regular quality checks, however, a large component of the quality control program consists of feedback from the recipients of materials. DSC orders are placed through a shopping cart system and are filled in the order they are received.","marks":[]}]}]}]}}',
    name: "about",
    slug: "dsc-about",
    updated_at: "2021-01-22T01:22:21.394Z",
    updated_by: {
      id: "1070",
      email: "pfey@northwestern.edu",
      first_name: "Petra",
      last_name: "Fey",
      roles: [
        {
          role: "curator",
          permissions: [
            {
              permission: "write",
              resource: "dictybase",
              __typename: "Permission",
            },
          ],
          __typename: "Role",
        },
      ],
      __typename: "User",
    },
    __typename: "Content",
  },
}

export { otherMaterials, intro, about }
