package com.github.moinmarcell.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.moinmarcell.backend.repo.FliprRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@SpringBootTest
class FliprControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    FliprRepository fliprRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @DirtiesContext
    @WithMockUser
    void onApiCall_returnEmptyListJsonFormat() throws Exception{
        mockMvc.perform(get("/api/fliprs").with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    @DirtiesContext
    @WithMockUser
    void whenApiCalledToSaveOneFlipr_thenReturnSavedFlipr() throws Exception {
        MvcResult result = mockMvc.perform(post("/api/fliprs")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{}"))
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();
        Flipr flipr = objectMapper.readValue(content, Flipr.class);
        assertNotNull(flipr.id());
    }
}