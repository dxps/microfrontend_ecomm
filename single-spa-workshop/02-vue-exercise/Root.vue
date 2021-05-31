<template>
    <div>
        <div>Vue App is mounted. This image path is {{ imageURL }}</div>
        <div>
            <img :src="imageURL" :width="widthPercentage" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imageURL: String,
        widthPercentage: String,
    },
};
</script>
