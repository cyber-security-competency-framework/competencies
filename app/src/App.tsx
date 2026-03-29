import React from 'react';
import { MarkdownToMatrix } from 'react-markdown-to-matrix';

export const App: React.FC = () => {
    return(
        <MarkdownToMatrix 

            title={'Cyber Security Competency\nFramework Explorer'}
            subtitle='Coach CISO'
            logo='images/cyber_competency_framework.png'

            // in order to embed just the matrix, leave this blank
            enabledOptions={['diff', 'filters', 'displayMode', 'upload']}
            
            fileUrls={["src/COMPETENCIES.md"]}
            
            // if the markdown file has embedded HTML, default to showing it
            renderHtml={true}

            /** make sure to use longform hex values here; otherwise the drop shadows won't work well */
            customTheme={{
                headerFont: 'Open Sans',
                bodyFont: 'Anonymous Pro'
            }}
            
            // add any headers here that show up in the MD file but shouldn't become context in the app
            excludeHeaders={['FAQ', 'Related skills & competencies frameworks', 'Defining and classifying skills']}

            // uncomment to turn this into a checklist
            // wrapperElement={Wrapper}
            
            // uncomment to play with wrapper elements on headers
            // headingWrapperElement={({ children}) => <div style={{backgroundColor: '#10162f', color: '#FFF'}}>{children}</div>}
            
            // uncomment to prevent the same elements from
            // being collapsed across rows
            // disableCollapsing={true}
        />
    );
};
