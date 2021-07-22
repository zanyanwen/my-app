<template>
  <div>
      button
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button type="primary">按钮</a-button>
      </a-config-provider>
      <a-button type="primary">按钮</a-button>
      <a-button type="link">Link</a-button>
    </div>
        icon
    <div>
      <a-icon type="step-forward" />
    </div>


  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>
