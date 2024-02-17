import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../hooks';
import { selectItemsBySite } from '../slices/itemSlice';

import Main from '../layouts/Main';
import Item from '../components/Site/Item';
import Info from '../components/Site/Info';

function Site() {
  const { site } = useParams();
  const items = useAppSelector((state) => selectItemsBySite(state, site || ''));

  return (
    <>
      {site && items ? (
        <Main>
          <div className="flex flex-col h-full overflow-auto">
            <Info name={site} />
            <div className="bg-gray-dark2 rounded-lg overflow-auto">
              <div className="flex flex-wrap items-center content-start">
                {items.map((e) => {
                  return <Item {...e}></Item>;
                })}
              </div>
            </div>
          </div>
        </Main>
      ) : null}
    </>
  );
}

export default Site;
