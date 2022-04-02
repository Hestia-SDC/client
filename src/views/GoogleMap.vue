<template>
  <GMapMap
    :center="center"
    :zoom="15"
    :options="{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      disableDefaultUi: false,
    }"
    map-type-id="terrain"
    ref="myMapRef"
    class="map"
    :disableDefaultUI="true"
  >
    <GMapCluster>
      <!-- Red Markers -->
      <GMapMarker
        :key="index"
        v-for="(m, index) in marker1"
        :position="m.position"
        :icon="require('@/assets/marker.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <GMapMarker
        :key="index"
        v-for="(m, index) in marker2"
        :position="m.position"
        :icon="require('@/assets/marker.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />

      <!-- Warning Markers -->
      <GMapMarker
        :key="index"
        v-for="(m, index) in warningMarker1"
        :position="m.position"
        :icon="require('@/assets/marker-warning.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <GMapMarker
        :key="index"
        v-for="(m, index) in warningMarker2"
        :position="m.position"
        :icon="require('@/assets/marker-warning.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />

      <!-- Dangerous Markers -->
      <GMapMarker
        :key="index"
        v-for="(m, index) in dangerousMarker"
        :position="m.position"
        :icon="require('@/assets/marker-dangerous.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <GMapMarker
        :key="index"
        v-for="(m, index) in dangerousMarker2"
        :position="m.position"
        :icon="require('@/assets/marker-dangerous2.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />

      <!-- Guardians -->
      <GMapMarker
        :key="index"
        v-for="(m, index) in guardianMarker1"
        :position="m.position"
        :icon="require('@/assets/marker-guardian.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <GMapMarker
        :key="index"
        v-for="(m, index) in guardianMarker2"
        :position="m.position"
        :icon="require('@/assets/marker-guardian.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <GMapMarker
        :key="index"
        v-for="(m, index) in guardianMarker3"
        :position="m.position"
        :icon="require('@/assets/marker-guardian.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />

      <!-- Save Markers -->

      <GMapMarker
        :key="index"
        v-for="(m, index) in safeMarker1"
        :position="m.position"
        :icon="require('@/assets/marker-save.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <GMapMarker
        :key="index"
        v-for="(m, index) in safeMarker2"
        :position="m.position"
        :icon="require('@/assets/marker-save.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <GMapMarker
        :key="index"
        v-for="(m, index) in safeMarker3"
        :position="m.position"
        :icon="require('@/assets/marker-save.svg')"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>

    <GMapCircle
      :key="city.id"
      v-for="city in germanCities"
      :radius="Math.sqrt(city.population) * 100"
      :center="{ lat: city.position.lat, lng: city.position.lng }"
    />
    <!-- 
    <GMapPolygon
      :paths="paths"
      :options="{ strokeColor: 'red', strokeWeight: 50 }"
    />

    <GMapPolyline :path="path" :editable="true" ref="polyline" /> -->
  </GMapMap>
</template>

<script>
import { ref } from "vue";

export default {
  components: {},
  setup() {
    const myMapRef = ref();

    const center = { lat: 41.304517, lng: 69.249275 };

    const marker1 = [
      {
        position: { lat: 41.3038, lng: 69.246335 },
      },
    ];
    const marker2 = [
      {
        position: { lat: 41.3138, lng: 69.246335 },
      },
    ];

    const guardianMarker1 = [
      {
        position: { lat: 41.3038, lng: 69.286335 },
      },
    ];

    const guardianMarker2 = [
      {
        position: { lat: 41.3138, lng: 69.260335 },
      },
    ];
    const guardianMarker3 = [
      {
        position: { lat: 41.3038, lng: 69.257335 },
      },
    ];

    const safeMarker1 = [
      {
        position: { lat: 41.3038, lng: 69.276335 },
      },
    ];

    const safeMarker2 = [
      {
        position: { lat: 41.3208, lng: 69.260335 },
      },
    ];
    const safeMarker3 = [
      {
        position: { lat: 41.3138, lng: 69.287335 },
      },
    ];

    const warningMarker1 = [
      {
        position: { lat: 41.3238, lng: 69.277335 },
      },
    ];
    const warningMarker2 = [
      {
        position: { lat: 41.2248, lng: 69.379335 },
      },
    ];

    const dangerousMarker = [
      {
        position: { lat: 41.2948, lng: 69.289335 },
      },
    ];
    const dangerousMarker2 = [
      {
        position: { lat: 41.2948, lng: 69.269335 },
      },
    ];

    const paths = [
      { lat: 41.3038, lng: 69.226335 },
      { lat: 41.3038, lng: 69.226335 },
      { lat: 41.3038, lng: 69.226335 },
    ];
    const path = [
      { lat: 41.3038, lng: 69.236335 },
      { lat: 41.3038, lng: 69.246335 },
      { lat: 41.3138, lng: 69.225335 },
    ];

    const germanCities = [
      {
        id: "badzones-1",
        population: 1,
        position: {
          lat: 41.3038,
          lng: 69.290335,
        },
      },
      {
        id: "badzones-2",
        position: {
          lat: 41.3038,
          lng: 69.296335,
        },
        population: 1,
      },
      {
        id: "badzones-3",
        position: {
          lat: 41.3008,
          lng: 69.293335,
        },
        population: 1,
      },
      {
        id: "badzones-3",
        position: {
          lat: 41.3008,
          lng: 69.303335,
        },
        population: 1,
      },
      {
        id: "badzones-3",
        position: {
          lat: 41.3508,
          lng: 69.293335,
        },
        population: 1,
      },
    ];

    return {
      myMapRef,
      center,
      marker1,
      marker2,
      germanCities,
      paths,
      path,
      guardianMarker1,
      guardianMarker2,
      guardianMarker3,
      safeMarker1,
      safeMarker2,
      safeMarker3,
      warningMarker1,
      warningMarker2,
      dangerousMarker,
      dangerousMarker2,
    };
  },
};
</script>

<style>
.map {
  height: 100vh;
  width: 100%;
  position: relative;
}

.sos {
  position: absolute;
  z-index: 5;
  bottom: 5%;
  right: 1%;
}
</style>
