import mockUser from "./mockUser"

const otherMaterials = {
  contentBySlug: {
    id: "8",
    content:
      '[{"type":"paragraph","children":[{"text":"","bold":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"type":"link","children":[{"text":"Additional DSC Materials","bold":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"}],"url":"/stockcenter/information/additional-materials"},{"text":"","bold":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"}]},{"type":"h5","children":[{"text":"18 antibodies","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"}]},{"type":"h5","children":[{"text":"Genomic library pools","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"}]},{"type":"h5","children":[{"text":"GWDI pooled libraries","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"}]}]',
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
      '[{"type":"paragraph","children":[{"text":"The","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":" ","bold":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":"Dicty Stock Center","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":" ","bold":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":"is a rapidly growing central repository for ","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":"Dictyostelium discoideum","italic":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":" strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies.  The ","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":"DSC","italic":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":" opened at Columbia University in New York City in the fall of 2002. In 2009 the ","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":"DSC","italic":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":" moved to its current location at Northwestern University in Chicago, IL, USA. The DSC is supported by NIH/NIGMS. Since 2015, DSC","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":" ","italic":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":"materials incur a small fee.","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"}]}]',
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
      '[{"type":"paragraph","children":[{"text":"Strains are stored frozen in liquid nitrogen as axenic cultures, cells grown on bacterial lawn, or spores recovered from development on bacterial lawn. Storage is in three separate identical tanks, one of which is located in a different building. Plasmids are stored frozen at -80°C in duplicate freezers as transformed bacteria and often as DNA, stored at -20°C.","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"}]},{"type":"paragraph","children":[{"text":"","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"}]},{"type":"paragraph","children":[{"text":"The collection is being built by submission of  published strains and plasmids. We encourage and also ","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":"periodically","italic":true,"fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"},{"text":" remind investigators to send new mutants, natural isolates, and plasmids, once they have been published. We do regular quality checks, however, a large component of the quality control program consists of feedback from the recipients of materials. DSC orders are placed through a shopping cart system and are filled in the order they are received.","fontColor":"inherit","fontSize":"inherit","fontFamily":"inherit"}]}]',
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
