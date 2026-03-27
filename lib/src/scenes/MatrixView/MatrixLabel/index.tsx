import { ColumnName, RowName, State } from '../../../models';
import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { HeadingWrapper, Hover } from '../../../components';
import { selectRowTooltip } from '../../../selectors/rows';

export type MatrixLabelProps = {
    label: RowName | ColumnName;
    type: 'left' | 'top';
}

export const MatrixLabel = ({ label, type }: MatrixLabelProps) => {
    const tooltip = useSelector((s: State) => selectRowTooltip(s, label));

    return (
        <StyledMatrixLabel type={type}>
            <div className="headingAnchor">
                <HeadingWrapper as='h2' mode='matrix' text={label} type={type === 'left' ? 'row' : 'column'}>
                    {label}
                </HeadingWrapper>
                {tooltip && <Hover className='rowTooltip'>{tooltip}</Hover>}
            </div>
        </StyledMatrixLabel>
    );
}

const StyledMatrixLabel = styled.div<{ type: 'top' | 'left'}>`
    align-self: center;
    height: 100%;
    font-size: 1rem;
    font-weight: bold;
    text-align: ${p => p.type === 'left' ? 'right' : 'left'};
    margin: ${p => p.type === 'left' ? '0 0.5rem' : '0 0 0 1.5rem'};
    position: relative;
    cursor: default;

    .headingAnchor {
        position: relative;
        display: inline-block;
    }

    .headingAnchor:hover .rowTooltip {
        display: block;
    }

    .rowTooltip {
        top: 100%;
        transform: translateY(0.5rem);
    }
`;