module.exports = {
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        StockDetailRow: '<rootDir>/src/components/StockDetailRow.jsx',
        // Home components
        About: '<rootDir>/src/components/Home/About.jsx',
        Availability: '<rootDir>/src/components/Home/Availability.jsx',
        Carousel: '<rootDir>/src/components/Home/Carousel.jsx',
        Downloads: '<rootDir>/src/components/Home/Downloads.jsx',
        Home: '<rootDir>/src/components/Home/index.jsx',
        Info: '<rootDir>/src/components/Home/Info.jsx',
        Intro: '<rootDir>/src/components/Home/Intro.jsx',
        Links: '<rootDir>/src/components/Home/Links.jsx',
        Materials: '<rootDir>/src/components/Home/Materials.jsx',
        // Editor components
        InlineEditor: '<rootDir>/src/components/editor/InlineEditor.jsx',
        // Plasmids components
        Plasmids: '<rootDir>/src/components/Plasmids/index.jsx',
        PlasmidDetail: '<rootDir>/src/components/Plasmids/PlasmidDetail.jsx',
        PlasmidTable: '<rootDir>/src/components/Plasmids/PlasmidTable.jsx',
        // Styles
        styles: '<rootDir>/src/styles/index.js'
    },
    roots: ['<rootDir>/tests/'],
    verbose: true
}
