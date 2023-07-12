package br.com.ecogreen.ecogreenbackend.dto;

public class CreatePostDTO {

    private String message;
    private String title;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
