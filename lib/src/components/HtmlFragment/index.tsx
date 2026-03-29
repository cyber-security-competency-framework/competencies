import React from 'react';
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { selectRenderHtml } from '../../selectors';

export type HtmlFragmentProps = {
    content: string
};

const PURIFY_CONFIG: DOMPurify.Config = {
    ALLOWED_TAGS: ['strong', 'em', 'code', 's', 'a', 'br', 'span'],
    ALLOWED_ATTR: ['href', 'title', 'class'],
    ALLOWED_URI_REGEXP: /^(https?:|mailto:)/i,
    ALLOW_DATA_ATTR: false,
};

export const HtmlFragment: React.FC<HtmlFragmentProps> = ({ content }) => {
    const renderHtml = useSelector(selectRenderHtml);

    if (renderHtml) {
        const sanitized = DOMPurify.sanitize(content, PURIFY_CONFIG);
        return <span dangerouslySetInnerHTML={{ __html: sanitized }} />
    } else {
        return <span>{content}</span>
    }
};
