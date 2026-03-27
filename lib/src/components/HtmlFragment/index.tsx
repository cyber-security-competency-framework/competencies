import React from 'react';
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { selectRenderHtml } from '../../selectors';

export type HtmlFragmentProps = {
    content: string
};

export const HtmlFragment: React.FC<HtmlFragmentProps> = ({ content }) => {
    const renderHtml = useSelector(selectRenderHtml);

    if (renderHtml) {
        const sanitized = DOMPurify.sanitize(content);
        return <span dangerouslySetInnerHTML={{ __html: sanitized }} />
    } else {
        return <span>{content}</span>
    }
};
