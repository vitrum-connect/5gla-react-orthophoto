import React, { useEffect } from 'react';

import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { Map, View } from 'ol';

import 'ol/ol.css';
import './OpenLayersComponent.css';

interface Props {
    id: string
}

export default function OpenLayersComponent({ id }: Props) {
    useEffect(() => {
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        })

        const map = new Map({
            target: id,
            layers: [ osmLayer ],
            view: new View({
                center: [0, 0],
                zoom: 0,
            }),
        });
        return () => map.setTarget(undefined)
    }, []);

    return (<div id={id} className="map"></div>);
}
